import fs from 'fs/promises';
import path from 'path';
import { TGcmd } from './CmdUtils';
import { worldCount } from '../../../Interface/common/index';

const worldCountDetails = async (bot: any) => {
  // ? fetch world population count
  const worldData = await fs.readFile(path.resolve(__dirname, '../../../Database/Overall.json'));
  const dataParsed = (await JSON.parse(worldData.toString())) as worldCount;

  await TGcmd(bot);

  bot.action('OA', async (ctx: any) => {
    await ctx.telegram.sendMessage(ctx.chat.id, `World Population : ${dataParsed.worldPopulationCount} Billion `);
  });
};

export default worldCountDetails;
