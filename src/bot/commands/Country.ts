import path from 'path';
import fs from 'fs/promises';
import { DBTypes } from '../../../Interface/common';
import { TGcmd } from './CmdUtils';

const getCountry = async (bot: any) => {
  const data = await fs.readFile(path.resolve(__dirname, '../../../Database/country.json'));
  const dataParse = await JSON.parse(data.toString());

  await TGcmd(bot);
  //   ? List of Countries
  bot.action('C', async (ctx: any) => {
    await ctx.telegram.sendMessage(ctx.chat.id, 'Select Country', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'INDIA',
              //   ? need to add data for countries
              callback_data: 'India'
            },
            {
              text: 'USA',
              callback_data: 'Usa'
            },
            {
              text: 'RUSSIA',
              callback_data: 'Ru'
            },
            {
              text: 'EGYPT',
              callback_data: 'Eg'
            },
            {
              text: 'BRAZIL',
              callback_data: 'Br'
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
              text: 'JAPAN',
              callback_data: 'Ja'
            },
            {
              text: 'NIGERIA',
              callback_data: 'Ni'
            },
            {
              text: 'PHILLIPPINES',
              callback_data: 'Phi'
            },
            {
              text: 'MEXICO',
              callback_data: 'Mex'
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
              text: 'INDONESIA',
              callback_data: 'In'
            },
            {
              text: 'BANGLADESH',
              callback_data: 'Ban'
            },
            {
              text: 'VIETNAM',
              callback_data: 'Vie'
            },
            {
              text: 'CONGO',
              callback_data: 'Con'
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
              text: 'ETHIOPIA',
              callback_data: 'Eth'
            },
            {
              text: 'TURKEY',
              callback_data: 'Tu'
            },
            {
              text: 'THAILAND',
              callback_data: 'Thai'
            },
            {
              text: 'GERMANY',
              callback_data: 'Ger'
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
              text: 'IRAN',
              callback_data: 'Ir'
            },
            {
              text: 'CHINA',
              callback_data: 'Ch'
            },
            {
              text: 'PAKISTHAN',
              callback_data: 'Pk'
            }
          ]
        ]
      }
    });

    ctx.reply('End Of The Page');
  });

  // ? india
  const getValuesbyCountry = async (bot: any, ...args: string[]) => {
    await args.forEach(el => {
      bot.action(`${el}`, async (ctx: any) => {
        console.log('key ', el);
        const key = `${el}`;
        console.log(`values ${dataParse[key]}`);

        return ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In ${el} : ${dataParse[key]} `);
      });
    });
  };

  getValuesbyCountry(bot, 'India', 'Usa');

  // bot.action('Us', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.usa} `);
  // });
  // bot.action('Ru', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.russia} `);
  // });
  // bot.action('Eg', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.egypt} `);
  // });
  // bot.action('Br', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.brazil}`);
  // });
  // bot.action('Ja', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.japan} `);
  // });
  // bot.action('Ni', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA :${dataParse.nigeria} `);
  // });
  // bot.action('Phi', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.philippines} `);
  // });
  // bot.action('Mex', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.mexico} `);
  // });
  // bot.action('In', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.indonesia}`);
  // });
  // bot.action('Ban', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.bangaladesh}`);
  // });
  // bot.action('Vie', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.vietnam}`);
  // });
  // bot.action('Con', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.cango}`);
  // });
  // bot.action('Eth', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.ethiopia}`);
  // });
  // bot.action('Tu', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.turkey}`);
  // });
  // bot.action('Thai', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.thailand}`);
  // });
  // bot.action('Ger', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.germany}`);
  // });
  // bot.action('Ir', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.iran}`);
  // });
  // bot.action('Ch', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${dataParse.china}`);
  // });
  // bot.action('Pk', async (ctx: any) => {
  //   ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA :${dataParse.pakistan} `);
  // });
};

export default getCountry;
