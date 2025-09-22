import type { Schema, Struct } from '@strapi/strapi';

export interface FeatureComponentAgent extends Struct.ComponentSchema {
  collectionName: 'components_feature_component_agents';
  info: {
    displayName: 'agent';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'feature-component.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface FeatureComponentCta extends Struct.ComponentSchema {
  collectionName: 'components_feature_component_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    learn: Schema.Attribute.String;
    portal: Schema.Attribute.String;
  };
}

export interface FeatureComponentFeature extends Struct.ComponentSchema {
  collectionName: 'components_feature_component_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    feature: Schema.Attribute.Text;
  };
}

export interface FeatureComponentForm extends Struct.ComponentSchema {
  collectionName: 'components_feature_component_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    email: Schema.Attribute.Email &
      Schema.Attribute.DefaultTo<'votre.email@exemple.fr'>;
    firstName: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    message: Schema.Attribute.Text;
    profile: Schema.Attribute.Enumeration<
      ['selectprofile', 'debtor', 'bailiff', 'lawyer', 'creditor']
    >;
    send: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'feature-component.agent': FeatureComponentAgent;
      'feature-component.cta': FeatureComponentCta;
      'feature-component.feature': FeatureComponentFeature;
      'feature-component.form': FeatureComponentForm;
    }
  }
}
