module.exports = {
  async local(ctx) {
    const { identifier, password } = ctx.request.body;

    // Recherche de l'utilisateur par email et peupler la relation 'role'
    const user = await strapi.query('plugin::users-permissions.user').findOne({
      where: { email: identifier },
      populate: { role: true },  // Peupler la relation 'role'
    });

    if (!user) {
      return ctx.badRequest('Identifiants invalides');
    }

    // Vérification du mot de passe
    const validPassword = await strapi.plugins['users-permissions'].services.user.validatePassword(password, user.password);
    if (!validPassword) {
      return ctx.badRequest('Identifiants invalides');
    }

    // Création du JWT
    const jwt = strapi.plugins['users-permissions'].services.jwt.issue({ id: user.id });

    // Préparer la réponse en incluant le rôle de l'utilisateur
    const sanitizedUser = {
      id: user.id,
      email: user.email,
      firstName: user.firstName || 'Nom non défini',  // Ajouter des valeurs par défaut si nécessaire
      lastName: user.lastName || 'Nom non défini',
      role: user.role.name || 'Rôle inconnu',  // Assurer que le rôle est présent
    };

    // Retourner le JWT et l'utilisateur, y compris son rôle
    ctx.send({
      jwt,
      user: sanitizedUser,
    });
  },
};