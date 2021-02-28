import i18next, { InitOptions, Resource } from 'i18next';

const en: Resource = {
  translation: {
    responses: {
      ping: 'Discbot version **{{version}}** | Response time **{{timeTaken}}** ms',
      sum: {
        error: 'The correct format is **!sum 1 2 3**.',
        success: 'That makes **{{sum}}**'
      }
    }
  }
};

const fi: Resource = {
  translation: {
    responses: {
      ping: 'Discbot versio **{{version}}** | Vasteaika **{{timeTaken}}** ms',
      sum: {
        error: 'Oikea muoto on **!sum 1 2 3**.',
        success: 'Se tekee yhteensä **{{sum}}**'
      }
    }
  }
};

const i18nOptions: InitOptions = {
  lng: 'fi',
  debug: true,
  resources: { en, fi }
};

i18next.init(i18nOptions).then((t) => t);

const i18n = i18next;

export { i18n };
