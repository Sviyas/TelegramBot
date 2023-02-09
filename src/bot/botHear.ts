import { message } from 'telegraf/filters';
import { botMessage } from '../../Interface/botMessage';
import writeFileSystem from '../../Models/storeFiles';

/**
 *
 * @param arg pass argument on telegraf
 */
const botHear = async (arg: any) => {
  arg.on(message('text'), async (ctx: any) => {
    const msg = ctx as botMessage;

    const getDay = new Date(msg.message.date * 1000).toLocaleString('en-US', {
      timeZone: 'Asia/kolkata'
    });
    ctx.reply('OK');
    const ob = {
      user_Id: msg.message.from.id,
      first_Name: msg.message.from.first_name,
      user_Name: msg.message.from.username,
      msg_ID: msg.message.message_id,
      user_Messages: msg.message.text,
      messaged_Date: getDay
    };
    const response = JSON.stringify(ob);

    await writeFileSystem(response);
  });
};

export default botHear;
