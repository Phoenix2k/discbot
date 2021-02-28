import chalk from 'chalk';
import Discord from 'discord.js';
import { doCommand } from './commands';
import { BotName, BotToken } from './types';
import { logger } from './utils/logger';
import { parseMessage } from './utils/parsers';

export class Discbot {
  readonly client: Discord.Client = new Discord.Client();
  readonly commandPrefix: string = '!';
  readonly name: BotName;
  readonly token: BotToken;

  constructor(name: BotName, token: BotToken) {
    this.name = name;
    this.token = token;
  }

  init(): void {
    if (!this.name && !this.token) {
      throw new Error('.env file seems to be missing or empty.');
    } else if (!this.name) {
      throw new Error('BOT_NAME missing from the environment.');
    } else if (!this.token) {
      throw new Error('BOT_TOKEN missing from the environment.');
    } else {
      const scrambledToken =
        this.token.substr(0, 4) +
        this.token.substr(4, this.token.length).replace(/./g, 'ˣ');
      logger.info('Using token:', scrambledToken);
    }
    try {
      this.client.on('error', (error) => logger.error(error));
      this.client.on('message', (message) => this.onMessage(message));
      this.client.on('ready', () => this.onReady());
      this.client.login(this.token);
    } catch (error) {
      logger.error('Unable to start up 🔥');
      throw error;
    }
  }

  async onMessage(message: Discord.Message): Promise<void> {
    if (message.author.bot) return;
    if (!message.content.startsWith(this.commandPrefix)) return;
    logger.debug(
      'Received command',
      chalk.yellow(message.content),
      'from',
      chalk.blue(message.author.username)
    );
    const { args, command } = parseMessage(message, this.commandPrefix);
    logger.success('Finished parsing the message.');
    logger.debug('Args:', args, 'Command:', chalk.yellow(command));
    await doCommand({ args, command, message });
  }

  onReady(): void {
    logger.success(`Logged in as ${this.client?.user?.tag}`);
    logger.ready(this.name, 'initialized!');
  }
}
