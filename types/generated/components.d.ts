import type { Schema, Struct } from '@strapi/strapi';

export interface ContactPlaceholder extends Struct.ComponentSchema {
  collectionName: 'components_contact_placeholders';
  info: {
    displayName: 'placeholder';
  };
  attributes: {
    emailPlaceholder: Schema.Attribute.String;
    firstNamePlaceholder: Schema.Attribute.String;
    lastNamePlaceholder: Schema.Attribute.String;
    messagePlaceholder: Schema.Attribute.String;
  };
}

export interface ContactProfileOption extends Struct.ComponentSchema {
  collectionName: 'components_contact_profile_options';
  info: {
    displayName: 'profileOption';
  };
  attributes: {
    bailiff: Schema.Attribute.String;
    creditor: Schema.Attribute.String;
    debtor: Schema.Attribute.String;
    lawyer: Schema.Attribute.String;
    selectProfile: Schema.Attribute.String;
  };
}

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
    email: Schema.Attribute.String;
    firstName: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    message: Schema.Attribute.String;
    placeholder: Schema.Attribute.Component<'contact.placeholder', false>;
    profile: Schema.Attribute.String;
    profileOption: Schema.Attribute.Component<'contact.profile-option', false>;
    send: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.placeholder': ContactPlaceholder;
      'contact.profile-option': ContactProfileOption;
      'feature-component.agent': FeatureComponentAgent;
      'feature-component.cta': FeatureComponentCta;
      'feature-component.feature': FeatureComponentFeature;
      'feature-component.form': FeatureComponentForm;
    }
  }
}
