import { botMessage } from '../../Interface/botMessage';
import writeFileSystem from '../../Models/storeFiles';

/**
 *
 * @param arg Start The Telegram bot
 */
const TGStart = async (arg: any) => {
  await arg.start(async (ctx: any) => {
    const msg = (await ctx) as botMessage;

    const getDay = new Date(msg.message.date * 1000).toLocaleString('en-US', {
      timeZone: 'Asia/kolkata'
    });

    const ob = {
      user_Id: msg.message.from.id,
      first_Name: msg.message.from.first_name,
      user_Name: msg.message.from.username,
      msg_ID: msg.message.message_id,
      user_Messages: msg.message.text,
      messaged_Date: getDay
    };

    await writeFileSystem(ob);

    await ctx.reply(`Hello ${msg.message.chat.first_name}`);
    await ctx.reply(`Have a Wonderful Day 🌟`);
    await ctx.reply(
      `Welcome TO My Chat \nThis chat is help you to know how many populations are in this world \n more info to click this /WorldPopulation`
    );
  });
};

export default TGStart;
