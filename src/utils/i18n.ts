import dotenv from 'dotenv';
import i18next, { InitOptions } from 'i18next';
import Backend, { i18nextFsBackend } from 'i18next-fs-backend';
import { join } from 'path';
import { isDebug } from './consts';

dotenv.config();

const i18nBackendOptions: i18nextFsBackend.i18nextFsBackendOptions = {
  addPath: join(process.env.PWD || '', '/locales/{{lng}}/{{ns}}.missing.json'),
  loadPath: join(process.env.PWD || '', '/locales/{{lng}}/{{ns}}.json')
};

const i18nOptions: InitOptions = {
  backend: i18nBackendOptions,
  debug: isDebug,
  defaultNS: 'responses',
  fallbackLng: {
    default: ['en', 'fi']
  },
  lowerCaseLng: true,
  lng: process.env.BOT_LANG,
  ns: ['responses']
};

i18next.use(Backend).init(i18nOptions);

const i18n = i18next;

export { i18n };
