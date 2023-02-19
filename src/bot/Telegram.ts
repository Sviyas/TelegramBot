import { Telegraf } from 'telegraf';
import TGStart from './Start';
import TGHelp from './Help';
import TGListen from './Listen';
import TGCommands from './CommandList';

const telegramBot = async (token: string) => {
  // ?  Create the New Bot
  const bot = new Telegraf(token as string);

  // ! server htmml via messages
  // bot.start((ctx: any) => {
  //   bot.telegram.sendMessage(ctx.chat.id, `<strong>bold</strong>`, {
  //     parse_mode: 'HTML'
  //   });
  // });

  // ! quit command
  // await bot.command('/quit', async (ctx: any) => {
  //   console.log(ctx.message);

  //   await ctx.telegram.leaveChat(ctx.message.chat.id);
  //   await ctx.leaveChat();

  //   console.log('check chat type', ctx.chat.type !== 'private');
  // });

  await TGStart(bot);

  await TGCommands(bot);

  await TGHelp(bot);

  await TGListen(bot);

  await bot.launch({});

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
};

export default telegramBot;
