// /**
//  * contact controller
//  */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::contact.contact');


/**
 * contact controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::contact.contact', ({ strapi }) => ({
  async find(ctx) {
    try {
      // Récupère le contenu complet du "Single Type" Contact
      const entity = await strapi.db.query('api::contact.contact').findOne({
        where: {},
        populate: {
          form: {
            populate: {
              placeholder: true,
              profileOption: true,
            },
          },
        },
      });

      // Nettoie la sortie pour éviter d'exposer des champs privés
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    } catch (error) {
      strapi.log.error('❌ Erreur lors de la récupération du contact :', error);
      ctx.throw(500, 'Erreur lors de la récupération du contact');
    }
  },
}));
