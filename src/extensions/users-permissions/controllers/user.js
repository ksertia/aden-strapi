module.exports = {
  async me(ctx) {
    const user = ctx.state.user; // utilisateur connecté via JWT

    if (!user) {
      return ctx.unauthorized("Not authenticated");
    }

    const fullUser = await strapi.db.query('plugin::users-permissions.user').findOne({
      where: { id: user.id },
      populate: ['role'], // 🚀 inclut le rôle
    });

    return fullUser;
  },
};
