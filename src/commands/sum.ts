import Discord from 'discord.js';
import { logSuccess } from '../utils/logger';
import { parseSum } from '../utils/parsers';

async function commandSum(args: string[], message: Discord.Message): Promise<void> {
  const sum = parseSum(args);
  const replyMessage = isNaN(sum)
    ? `The correct format is **!sum 1 2 3**.`
    : `That makes **${sum}**`;
  const response = await message.reply(replyMessage);
  return logSuccess({ message, replyMessage, response });
}

export { commandSum };
