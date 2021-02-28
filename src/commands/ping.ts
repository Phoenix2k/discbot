import Discord from 'discord.js';
import { i18n } from '../utils/i18n';
import { logSuccess } from '../utils/logger';

async function commandPing(message: Discord.Message): Promise<void> {
  const timeTaken = message.createdTimestamp - Date.now();
  const version = process.env.npm_package_version;
  const replyMessage = i18n.t('responses.ping', { timeTaken, version });
  const response = await message.reply(replyMessage);
  return logSuccess({ message, replyMessage, response });
}

export { commandPing };
