import Discord, { MessageEmbed } from 'discord.js';
import { i18n } from '../utils/i18n';
import { logSuccess } from '../utils/logger';

async function commandUnknown(command: string, message: Discord.Message): Promise<void> {
  const replyMessage = i18n.t('responses:unknownCommand.reply', { command });
  const embed = new MessageEmbed()
    .setDescription(i18n.t('responses:unknownCommand.embed.description'))
    .setTitle(i18n.t('responses:unknownCommand.embed.title'))
    .setURL(i18n.t('responses:unknownCommand.embed.url'));

  const response = await message.reply(replyMessage);
  await message.channel.send({ embed });
  return logSuccess({ message, replyMessage, response });
}

export { commandUnknown };