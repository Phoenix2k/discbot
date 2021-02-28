import chalk from 'chalk';
import Consola, { ConsolaOptions } from 'consola';
import Discord from 'discord.js';

interface SuccessProps {
  message: Discord.Message;
  replyMessage: string;
  response: Discord.Message;
}

const loggerOptions: ConsolaOptions = {
  level: 4
};

const logger = Consola.create(loggerOptions);

function logSuccess({ message, replyMessage, response }: SuccessProps): void {
  const { author, channel, createdTimestamp, id } = response;
  const { guild } = channel as Discord.TextChannel;
  logger.success(
    'Replied to',
    chalk.blue(message.author.username),
    'as',
    author.username,
    chalk.green(replyMessage)
  );
  logger.debug('Timestamp:', chalk.gray(new Date(createdTimestamp)));
  logger.debug(
    'Link to reply:',
    chalk.gray(`https://discord.com/channels/${guild.id}/${channel.id}/${id}`)
  );
}

export { logger, logSuccess };
