import Discord from 'discord.js';
import { logSuccess } from '../utils/logger';

async function commandPing(message: Discord.Message): Promise<void> {
  const timeTaken = message.createdTimestamp - Date.now();
  const replyMessage = `Discbot version **${process.env.npm_package_version}** | Response time **${timeTaken}** ms`;
  const response = await message.reply(replyMessage);
  return logSuccess({ message, replyMessage, response });
}

export { commandPing };
