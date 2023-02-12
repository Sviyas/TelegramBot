import { Telegraf } from 'telegraf';
import TGStart from './Start';
import TGHelp from './Help';
import TGListen from './Listen';
import TGCommands from './CommandList';

const telegramBot = async (token: string) => {
  // ?  Create New Bot
  const bot = new Telegraf(token as string);
  // ? Start Bot

  await TGStart(bot);

  await TGCommands(bot);
  // ? Help
  await TGHelp(bot);

  await TGListen(bot);

  await bot.launch();
};

export default telegramBot;
