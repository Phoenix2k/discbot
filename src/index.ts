import 'dotenv/config';
import { Discbot } from './main';
import { BotToken } from './types';

const name: BotToken = process.env.BOT_NAME;
const token: BotToken = process.env.BOT_TOKEN;

const app = new Discbot(name, token);
app.init();

export default app;
