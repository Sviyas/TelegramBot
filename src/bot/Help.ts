// import botScrapData from '../utils/msg';
import { botMessage } from '../../Interface/botMessage';
import writeFileSystem from '../../Models/storeFiles';

const TGHelp = async (arg: any) => {
  // ? bot help
  await arg.help(async (ctx: any) => {
    const msg = ctx as botMessage;

    ctx.reply(`How can I help You ${msg.message.from.first_name}`);
    ctx.reply(`This can perform the following commands\n -/start\n -/help \n -/WorldPopulation `);
  });
};

export default TGHelp;
