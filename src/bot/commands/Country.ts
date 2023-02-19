import path from 'path';
import fs from 'fs/promises';
import { TGcmd } from './CmdUtils';
import { readFile } from '../../../Models/storeFiles';

const getCountry = async (bot: any) => {
  const data = path.resolve(__dirname, '../../../Database/Country.json');
  const dataParse = await readFile(data);
  const fetchData = await JSON.parse(dataParse as string);

  await TGcmd(bot);
  //   ? List of Countries
  await bot.action('C', async (ctx: any) => {
    await ctx.telegram.sendMessage(ctx.chat.id, 'Select Country', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'IND',
              callback_data: 'India'
            },
            {
              text: 'USA',
              callback_data: 'Usa'
            },
            {
              text: 'RUS',
              callback_data: 'Russia'
            },
            {
              text: 'EGY',
              callback_data: 'Egypt'
            },
            {
              text: 'BRA',
              callback_data: 'Brazil'
            },
            {
              text: 'More',
              callback_data: 'MR'
            }
          ]
        ]
      }
    });
  });

  bot.action('MR', async (ctx: any) => {
    ctx.telegram.sendMessage(ctx.chat.id, 'List 2', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'JPN',
              callback_data: 'Japan'
            },
            {
              text: 'NGA',
              callback_data: 'Nigeria'
            },
            {
              text: 'PHL',
              callback_data: 'Philippines'
            },
            {
              text: 'MEX',
              callback_data: 'Mexico'
            },
            {
              text: 'More',
              callback_data: 'Mo'
            }
          ]
        ]
      }
    });
  });

  bot.action('Mo', async (ctx: any) => {
    ctx.telegram.sendMessage(ctx.chat.id, 'List 3', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'IDN',
              callback_data: 'Indonesia'
            },
            {
              text: 'BGD',
              callback_data: 'Bangladesh'
            },
            {
              text: 'VDR',
              callback_data: 'Vietnam'
            },
            {
              text: 'COG',
              callback_data: 'Congo'
            },
            {
              text: 'More',
              callback_data: 'Me'
            }
          ]
        ]
      }
    });
  });

  bot.action('Me', async (ctx: any) => {
    ctx.telegram.sendMessage(ctx.chat.id, 'List 4', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'ETH',
              callback_data: 'Ethiopia'
            },
            {
              text: 'TUR',
              callback_data: 'Turkey'
            },
            {
              text: 'THAI',
              callback_data: 'Thailand'
            },
            {
              text: 'DEU',
              callback_data: 'Germany'
            },
            {
              text: 'More',
              callback_data: 'Mor'
            }
          ]
        ]
      }
    });
  });

  bot.action('Mor', async (ctx: any) => {
    ctx.telegram.sendMessage(ctx.chat.id, 'List 4', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'IRN',
              callback_data: 'Iran'
            },
            {
              text: 'CHN',
              callback_data: 'China'
            },
            {
              text: 'PAK',
              callback_data: 'Pakistan'
            }
          ]
        ]
      }
    });

    ctx.reply('End Of The Page');
  });

  // ? fetch popoulation data for each country
  const getValuesbyCountry = async (bot: any, ...args: string[]) => {
    await args.forEach(el => {
      bot.action(`${el}`, async (ctx: any) => {
        const key = `${el}`;
        return ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In ${el} : ${fetchData[key]} `);
      });
    });
  };

  getValuesbyCountry(
    bot,
    'India',
    'Usa',
    'Russia',
    'Egypt',
    'Brazil',
    'Japan',
    'Nigeria',
    'Philippines',
    'Mexico',
    'Indonesia',
    'Bangladesh',
    'Vietnam',
    'Congo',
    'Ethiopia',
    'Turkey',
    'Thailand',
    'Germany',
    'Iran',
    'China',
    'Pakistan'
  );
};

export default getCountry;
