import Discord from 'discord.js';
import { changeLanguage, i18n } from '../utils/i18n';
import { logSuccess } from '../utils/logger';
import { parseLang } from '../utils/parsers';

async function commandLang(args: string[], message: Discord.Message): Promise<void> {
  const lang = parseLang(args);
  if (lang) await changeLanguage(lang);
  const replyMessage = lang
    ? i18n.t('responses:changeLang.success')
    : i18n.t('responses:changeLang.error', { languages: i18n.languages.join(', ') });
  const response = await message.reply(replyMessage);
  return logSuccess({ message, replyMessage, response });
}

export { commandLang };
