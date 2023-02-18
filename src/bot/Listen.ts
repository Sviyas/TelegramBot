import { message } from 'telegraf/filters';
import { botMessage } from '../../Interface/botMessage';
import writeFileSystem from '../../Models/storeFiles';

/**
 *
 * @param arg pass argument on telegraf
 */
const TGListen = async (arg: any) => {
  arg.on(message('text'));

  await arg.on(message('text'), async (ctx: any) => {
    const msg = (await ctx) as botMessage;

    const getDay = new Date(msg.message.date * 1000).toLocaleString('en-US', {
      timeZone: 'Asia/kolkata'
    });
    await ctx.reply(msg.message.text);

    // ? store user info
    const ob = {
      user_Id: msg.message.from.id,
      first_Name: msg.message.from.first_name,
      user_Name: msg.message.from.username,
      msg_ID: msg.message.message_id,
      user_Messages: msg.message.text,
      messaged_Date: getDay
    };

    await writeFileSystem(ob);
  });
  // }
  //  arg.on(message('sticker'))
  //   console.log('stickers');

  //   await arg.on(message('sticker'), async (ctx: any) => {
  //     console.log('context', ctx);

  //     const sticker = (await ctx) as botMessage;
  //     const getDay = new Date(sticker.message.date * 1000).toLocaleString('en-US', {
  //       timeZone: 'Asia/kolkata'
  //     });
  //     await ctx.reply(sticker.message.text);

  //     const ob = {
  //       user_Id: sticker.message.from.id,
  //       first_Name: sticker.message.from.first_name,
  //       user_Name: sticker.message.from.username,
  //       msg_ID: sticker.message.message_id,
  //       user_Messages: sticker.message.text,
  //       messaged_Date: getDay
  //     };

  //     await writeFileSystem(ob);
  //   });
  // }
};

export default TGListen;
