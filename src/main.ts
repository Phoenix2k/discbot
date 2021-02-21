import { Consola } from 'consola';
import { BotName, BotToken } from './types';
import { logger } from './utils/logger';

export class Discbot {
  private readonly token: BotToken;
  protected readonly logger: Consola = logger;
  public readonly name: BotName;

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
      const scrambledToken = this.token.substr(0, 4) + this.token.substr(4, this.token.length).replace(/./g, 'ˣ');
      this.logger.info('Using token:', scrambledToken);
    }
    this.logger.success(this.name, 'initialized.');
    return;
  }
}
