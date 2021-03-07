import chalk from 'chalk';
import Discord from 'discord.js';
import { logger } from '../utils/logger';
import { commandLang } from './lang';
import { commandPing } from './ping';
import { commandSum } from './sum';
import { commandUnknown } from './unknown';

type DoCommandProps = {
  args: string[];
  command: string;
  message: Discord.Message;
};

async function doCommand({ args, command, message }: DoCommandProps): Promise<void> {
  let performCommand: null | Promise<void> = null;
  switch (command) {
    case 'lang': {
      performCommand = commandLang(args, message);
      break;
    }
    case 'ping': {
      performCommand = commandPing(message);
      break;
    }
    case 'sum': {
      performCommand = commandSum(args, message);
      break;
    }
    default:
      logger.warn('No command specified for', chalk.yellow(command));
      performCommand = commandUnknown(command, message);
  }
  logger.info('Performing', chalk.yellow(command), 'command …');
  return performCommand;
}

export { doCommand };
