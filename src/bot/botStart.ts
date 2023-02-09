import { botMessage } from '../../Interface/botMessage';
import writeFileSystem from '../../Models/storeFiles';

/**
 *
 * @param arg Start The Bot
 */
const startBotMsg = async (arg: any) => {
  arg.start(async (ctx: any) => {
    const msg = ctx as botMessage;

    const getDay = new Date(msg.message.date * 1000).toLocaleString('en-US', {
      timeZone: 'Asia/kolkata'
    });
    ctx.reply('Welcome TO My Chat Bot \n Have a Wonderful Day');
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

export default startBotMsg;
