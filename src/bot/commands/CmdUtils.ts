import path from 'path';
import fs from 'fs/promises';
import { botMessage } from '../../../Interface/botMessage';

/**
 *
 * @param bot Telegram bot CMD List function
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
 * @param dataParse Return Parsed Data and fetch data from db
 */
export const getValuesbyCountry = async (bot: any, ...args: string[]) => {
  const data = await fs.readFile(path.resolve(__dirname, '../../../Database/country.json'));
  const dataParse = await JSON.parse(data.toString());
  await args.forEach(el => {
    bot.action(`${el}`, async (ctx: any) => {
      const key = `${el}`;
      return ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In ${el} : ${dataParse[key]} `);
    });
  });
};

/**
 * @params      pass a number or object
 * @description Get Current Date
 */

export const getDay = async (arg: any) => {
  const date = arg as botMessage;
  const getDate = new Date(date.message.date * 1000).toLocaleString('en-US', {
    timeZone: 'Asia/kolkata'
  });

  return getDate;
};
