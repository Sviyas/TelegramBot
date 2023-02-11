import { Telegraf } from 'telegraf';
import writeFileSystem from '../../Models/storeFiles';
import { botMessage } from '../../Interface/botMessage';
import { message } from 'telegraf/filters';
import startBotMsg from './botStart';
import botHelp from './botHelp';
import botHear from './botHear';
import botCommands from './botCommands';

const scriptBot = async (token: string) => {
  // ?  Create New Bot
  const bot = new Telegraf(token as string);
  // ? Start Bot

  await startBotMsg(bot);

  await botCommands(bot);
  // ? Help
  await botHelp(bot);

  await botHear(bot);

  await bot.launch();
};

export default scriptBot;
