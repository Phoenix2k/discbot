import Discord from 'discord.js';
import { logSuccess } from '../utils/logger';

async function commandPing(message: Discord.Message): Promise<void> {
  const timeTaken = message.createdTimestamp - Date.now();
  const replyMessage = `Still here 👋 Took me *${timeTaken}* ms to react.`;
  const response = await message.reply(replyMessage);
  return logSuccess({ message, replyMessage, response });
}

export { commandPing };
