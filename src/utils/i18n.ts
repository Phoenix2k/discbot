import i18next, { InitOptions } from 'i18next';
import Backend, { i18nextFsBackend } from 'i18next-fs-backend';
import { join } from 'path';

const i18nBackendOptions: i18nextFsBackend.i18nextFsBackendOptions = {
  addPath: join(__dirname, '../../locales/{{lng}}/{{ns}}.missing.json'),
  loadPath: join(__dirname, '../../locales/{{lng}}/{{ns}}.json')
};

const i18nOptions: InitOptions = {
  backend: i18nBackendOptions,
  debug: true,
  defaultNS: 'responses',
  lng: 'fi',
  ns: ['responses']
};

i18next.use(Backend).init(i18nOptions);

const i18n = i18next;

export { i18n };
