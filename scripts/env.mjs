#!/usr/bin/env node
import chalk from 'chalk';
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import defaults from '../src/data/env.json';

const langChoices = [
  {
    name: 'English / English',
    value: 'en'
  },
  {
    name: 'Finnish / Suomi',
    value: 'fi'
  }
];

/**
 * Merges the default values with user input and
 * creates an `.env` file based on the result.
 */
async function createEnv() {
  const answers = await getAnswers();
  let envConfig = defaults;

  Object.keys(answers).forEach((key) => {
    envConfig[key] = answers[key];
  });

  console.info(`\nCreating ${chalk.bold('.env')} file ...\n`);
  const fileContents = stringify(envConfig);
  console.debug(chalk.whiteBright(fileContents));
  fs.writeFileSync('./.env', fileContents);

  console.info(
    chalk.green('✔'),
    'Environment file successfully created:',
    chalk.gray(path.resolve('.', chalk.cyan('.env'))),
    '\n'
  );
  console.info(
    'If you noticed an error, you can edit the file directly or run this script again with',
    chalk.green('npm run generate:env'),
    '\n'
  );
}

/**
 * Asks the user a set of questions.
 */
async function getAnswers() {
  return inquirer.prompt([
    {
      choices: langChoices,
      message: 'Choose a language for the bot',
      name: 'BOT_LANG',
      type: 'list',
      validate: required
    },
    {
      message: 'Bot name',
      name: 'BOT_NAME',
      type: 'input',
      validate: required
    },
    {
      message: 'Discord app token',
      name: 'BOT_TOKEN',
      type: 'password',
      validate: required
    },
    {
      message: 'GitHub token for creating releases (optional)',
      name: 'GITHUB_TOKEN',
      type: 'password'
    }
  ]);
}

/**
 * Initializes the application.
 */
function init() {
  console.info(`${chalk.bold('Setting up your environment …')}\n`);
  try {
    fs.access('.env', fs.constants.R_OK, async (error) => {
      if (error) return createEnv();
      const answer = await inquirer.prompt([
        {
          message: 'Want to overwrite the existing configuration?',
          name: 'overwrite',
          type: 'confirm'
        }
      ]);
      console.log('');
      if (answer.overwrite) createEnv();
    });
  } catch (error) {
    console.error(error);
  }
}

/**
 * Checks if a value meets the requirements;
 * in this case it just makes sure it's not empty.
 */
function required(value) {
  if (/\w/.test(value)) {
    return true;
  }
  return 'This field is required.';
}

/**
 * Converts a key value pair object into a string.
 *
 * @example { "key": value }
 * @returns `key=value`
 */
function stringify(object) {
  let result = '';
  for (const [key, value] of Object.entries(object)) {
    if (!key) continue;
    const line = `${key}=${String(value)}`;
    result += line + '\n';
  }
  return result;
}

init();
