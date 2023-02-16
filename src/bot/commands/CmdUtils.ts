import path from 'path';
import fs from 'fs/promises';
import { DBTypes } from '../../../Interface/common';

// ? fetch Data from file
const data = fs.readFile(path.resolve(__dirname, '../../../Database/country.json'));
const dataParse = data.toString();

/**
 *
 * @param bot Telegram bot CMD List
 */

export const TGcmd = async (bot: any) => {
  await bot.command(`WorldPopulation`, async (ctx: any) => {
    return ctx.telegram.sendMessage(ctx.chat.id, `populations Data`, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Countries',
              callback_data: 'C'
            },
            {
              text: 'States',
              callback_data: 'ST'
            },
            {
              text: 'OverAll',
              callback_data: 'OA'
            }
          ]
        ]
      }
    });
  });
};

/**
 *
 * @param bot TG Bot
 * @param dataParse Return Parsed Data
 */
export const getValuesbyCountry = async (bot: any, ...args: string[]) => {
  const values = args.forEach((el: any) => {
    bot.action(`${args}`, async (ctx: any) => {
      ctx.ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In ${el} : ${dataParse.includes(el)}`);
    });
  });
  return values;
};
