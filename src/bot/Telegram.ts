import { Telegraf } from 'telegraf';
import TGStart from './Start';
import TGHelp from './Help';
import TGListen from './Listen';
import TGCommands from './CommandList';
import { botMessage } from '../../Interface/botMessage';
import { message } from 'telegraf/filters';

const telegramBot = async (token: string) => {
  // ?  Create the New Bot
  const bot = new Telegraf(token as string);

  // ? fetch phone number
  // bot.help(async (ctx: any) => {
  //   const msg = ctx as botMessage;

  //   await ctx.telegram.sendMessage(ctx.chat.id, 'Please Provide Your contact detais', {
  //     parse_mode: 'Markdown',
  //     reply_markup: {
  //       one_time_keyboard: true,
  //       keyboard: [
  //         [
  //           {
  //             text: 'share phone Number',
  //             request_contact: true
  //           },
  //           {
  //             text: 'Cancel'
  //           }
  //         ]
  //       ],
  //       force_reply: true
  //     }
  //   });
  //   bot.on(message('contact'), (ctx: any) => {
  //     const contact = ctx.message.contact.phone_number;
  //     console.log('Hello Contact', contact);
  //   });
  // });

  await TGStart(bot);

  await TGCommands(bot);

  await TGHelp(bot);

  await TGListen(bot);

  await bot.launch();

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
};

export default telegramBot;
