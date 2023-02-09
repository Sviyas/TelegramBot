import { Telegraf } from 'telegraf';
import writeFileSystem from '../../Models/storeFiles';
import { botMessage } from '../../Interface/botMessage';
import { message } from 'telegraf/filters';
import startBotMsg from './botStart';
import botHearing from './botHear';

const scriptBot = async (token: string) => {
  // ?  Create New Bot
  const bot = new Telegraf(token as string);

  // ? Start Bot
  await startBotMsg(bot);

  // ? Help
  bot.help(async msg => {});

  // ? bot Hear
  await botHearing(bot);

  bot.launch();
};

export default scriptBot;
