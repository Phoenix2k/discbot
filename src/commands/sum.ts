import Discord from 'discord.js';
import { i18n } from '../utils/i18n';
import { logSuccess } from '../utils/logger';
import { parseSum } from '../utils/parsers';

async function commandSum(args: string[], message: Discord.Message): Promise<void> {
  const sum = parseSum(args);
  const replyMessage = isNaN(sum)
    ? i18n.t('responses:sum.error')
    : i18n.t('responses:sum.success', { sum });
  const response = await message.reply(replyMessage);
  return logSuccess({ message, replyMessage, response });
}

export { commandSum };
