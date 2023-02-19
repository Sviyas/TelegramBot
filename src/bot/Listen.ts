import { message } from 'telegraf/filters';
import { botMessage } from '../../Interface/botMessage';
import { writeFileSystem } from '../../Models/storeFiles';
import { getDay } from './commands/CmdUtils';

/**
 *
 * @param arg pass argument on telegraf
 */
const TGListen = async (arg: any) => {
  arg.on(message('text'));

  await arg.on(message('text'), async (ctx: any) => {
    const msg = (await ctx) as botMessage;

    const getDate = await getDay(msg);
    await ctx.reply(msg.message.text);

    // ? store user info
    const ob = {
      from_Id: msg.message.from.id,
      first_Name: msg.message.from.first_name,
      user_Name: msg.message.from.username,
      msg_ID: msg.message.message_id,
      user_Messages: msg.message.text,
      messaged_Date: getDate
    };

    await writeFileSystem(ob);
  });
};

export default TGListen;
