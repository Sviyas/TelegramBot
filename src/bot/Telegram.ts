import { Telegraf } from 'telegraf';
import TGStart from './Start';
import TGHelp from './Help';
import TGListen from './Listen';
import TGCommands from './CommandList';

const telegramBot = async (token: string) => {
  // ?  Create the New Bot
  const bot = new Telegraf(token as string);

  await TGStart(bot);

  await TGCommands(bot);

  await TGHelp(bot);

  await TGListen(bot);

  await bot.launch();
};

export default telegramBot;
