import path from 'path';
import { readFile } from '../../../Models/storeFiles';
import { TGcmd } from './CmdUtils';
import { botMessage } from '../../../Interface/botMessage';
import { message } from 'telegraf/filters';

/**
 * ! Need TO Implement
 * @param bot
 */
const stateDetails = async (bot: any) => {
  // ? fetch states details country wise
  const datafetch = await readFile(path.resolve(__dirname, '../../../Database/StateList.json'));
  const dataParse = await JSON.parse(datafetch as string);

  await TGcmd(bot);

  await bot.action('ST', async (ctx: any) => {
    await ctx.telegram.sendMessage(ctx.chat.id, `Which Country States You Want Know `);
    const userRequest = (await ctx) as botMessage;

    await bot.hears(message('text'));
  });
};

export default stateDetails;
