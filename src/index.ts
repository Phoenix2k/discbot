import dotenv from 'dotenv';
import { Discbot } from './main';
import { BotToken } from './types';

dotenv.config();

const name: BotToken = process.env.BOT_NAME;
const token: BotToken = process.env.BOT_TOKEN;

const app = new Discbot(name, token);
app.init();

export default app;
