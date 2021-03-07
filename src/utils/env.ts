import chalk from 'chalk';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import envs from '../data/env.json';
import { logger } from './logger';
import { stringify } from './strings';

dotenv.config();

type EnvConfig = { [key: string]: string };
type EnvKey = keyof Envs;
type Envs = typeof envs;

export function updateEnv(key: string, value: string): void {
  const envConfig: EnvConfig = envs;
  Object.keys(envs as Envs).forEach((envKey) => {
    envConfig[envKey] = process.env[envKey] || envs[envKey as EnvKey] || '';
  });
  envConfig[key] = value;
  logger.info(`Updating ${chalk.cyan('.env')} file ...`);
  const fileContents = stringify(envConfig);
  fs.writeFileSync('./.env', fileContents);
  logger.success('Env file updated', chalk.gray(path.resolve('.', chalk.cyan('.env'))));
}
