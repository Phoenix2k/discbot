import { Consola } from 'consola';
import { logger } from './logger';
import { Name } from './types';

export class Discbot {
  public name: Name;
  protected readonly logger: Consola;
  constructor(name: string) {
    this.name = name;
    this.logger = logger;
  }

  init(): void {
    this.logger.success(this.name, 'initialized.');
    return;
  }
}
