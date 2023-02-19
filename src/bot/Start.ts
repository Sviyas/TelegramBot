import { botMessage } from '../../Interface/botMessage';
import { writeFileSystem } from '../../Models/storeFiles';
import { getDay } from './commands/CmdUtils';

/**
 *
 * @param arg Start The Telegram bot
 */
const TGStart = async (arg: any) => {
  await arg.start(async (ctx: any) => {
    const msg = (await ctx) as botMessage;

    const getDate = await getDay(msg);

    const ob = {
      user_Id: msg.message.from.id,
      first_Name: msg.message.from.first_name,
      user_Name: msg.message.from.username,
      msg_ID: msg.message.message_id,
      user_Messages: msg.message.text,
      messaged_Date: getDate
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
