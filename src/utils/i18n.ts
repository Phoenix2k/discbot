import chalk from 'chalk';
import dotenv from 'dotenv';
import i18next, { InitOptions } from 'i18next';
import Backend, { i18nextFsBackend } from 'i18next-fs-backend';
import { join } from 'path';
import { isDebug } from './consts';
import { updateEnv } from './env';
import { logger } from './logger';

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
  interpolation: {
    escapeValue: false
  },
  lowerCaseLng: true,
  lng: process.env.BOT_LANG,
  ns: ['responses']
};

i18next.use(Backend).init(i18nOptions);

const i18n = i18next;

i18n.on('languageChanged', (lang) => {
  logger.info('Language changed to:', chalk.yellow(lang));
  updateEnv('BOT_LANG', lang);
});

async function changeLanguage(lang: string): Promise<void> {
  await i18n.changeLanguage(lang);
}

export { changeLanguage, i18n };
