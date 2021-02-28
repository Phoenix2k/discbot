import { config } from 'dotenv';
import path from 'path';
import { Discbot } from './main';

describe('Discbot class', () => {
  beforeAll(() => {
    config({
      path: path.join(__dirname, '.env.test')
    });
  });
  const { BOT_NAME, BOT_TOKEN } = Object.assign({}, process.env);
  test('has the correct name', () => {
    const app = new Discbot(BOT_NAME, BOT_TOKEN);
    expect(app.name).toEqual(BOT_NAME);
  });
  test('should throw an error when no params are provided', () => {
    const app = new Discbot('', '');
    expect(() => app.init()).toThrow('.env file seems to be missing or empty.');
  });
  test('should throw an error when BOT_NAME is missing', () => {
    const app = new Discbot('', BOT_NAME);
    expect(() => app.init()).toThrow('BOT_NAME missing from the environment.');
  });
  test('should throw an error when BOT_TOKEN is missing', () => {
    const app = new Discbot(BOT_TOKEN, '');
    expect(() => app.init()).toThrow('BOT_TOKEN missing from the environment.');
  });
});
