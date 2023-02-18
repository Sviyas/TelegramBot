// import botScrapData from '../utils/msg';
import { botMessage } from '../../Interface/botMessage';

const TGHelp = async (arg: any) => {
  // ? bot help
  await arg.help(async (ctx: any) => {
    const msg = ctx as botMessage;

    ctx.reply(`How can I help You ${msg.message.from.first_name}`);
    ctx.reply(`This can perform the following commands\n -/start\n -/Report \n -/WorldPopulation `);
    await arg.telegram.sendMessage(ctx.chat.id, 'Text', {
      parse_mode: 'Markdown',
      reply_markup: {
        one_time_keyboard: true,
        keyboard: [
          [
            {
              text: 'Share Your Number'
            }
          ]
        ]
      }
    });
  });
};

export default TGHelp;
