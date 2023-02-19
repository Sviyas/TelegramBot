import { botMessage } from '../../Interface/botMessage';
import { message } from 'telegraf/filters';
import { getDay } from './commands/CmdUtils';

const TGHelp = async (bot: any) => {
  // ? bot help
  await bot.help(async (ctx: any) => {
    const msg = ctx as botMessage;

    await ctx.reply(`How can I help You ${msg.message.from.first_name}`);
    await ctx.reply(`This can perform the following commands\n -/start\n -/WorldPopulation `);

    await setTimeout(async () => {
      await ctx.telegram.sendMessage(ctx.chat.id, 'Please Provide Your contact detais', {
        parse_mode: 'Markdown',
        reply_markup: {
          one_time_keyboard: true,
          keyboard: [
            [
              {
                text: 'share phone Number',
                request_contact: true
              },
              {
                text: 'Cancel'
              }
            ]
          ],
          force_reply: true
        }
      });
      await bot.on(message('contact'), async (ctx: any) => {
        const msg = (await ctx) as botMessage;
        const getDate = await getDay(msg);

        const storeUserInfo = {
          user_Id: msg.message.contact.user_id,
          user_Name: msg.message.contact.first_name,
          user_PhoneNumber: msg.message.contact.phone_number,
          msged_Date: getDate,
          msged_Id: msg.message.message_id
        };
        console.log(storeUserInfo);
      });
    }, 7000);
  });
};

export default TGHelp;
