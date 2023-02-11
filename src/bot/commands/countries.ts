import puppeteer from 'puppeteer';

const countryDataFetch = async (bot: any) => {
  await puppeteer.launch({ headless: true }).then(async browser => {
    const page = (await browser.pages())[0];
    // ? india
    await page.goto('https://countrymeters.info/en/India');
    const india = await (await (await page.$x("//div [@id ='cp1']"))[0].getProperty('textContent')).jsonValue();
    // ?
    await page.goto('https://countrymeters.info/en/United_States_of_America_(USA)');
    const usa = await (await (await page.$x("//div [@id ='cp1']"))[0].getProperty('textContent')).jsonValue();
    // ? fetch Country Population
    await bot.command(`WorldPopulation`, async (ctx: any) => {
      await ctx.telegram.sendMessage(ctx.chat.id, `populations Data`, {
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

    //   ? List of Countries

    bot.action('C', async (ctx: any) => {
      // ? delete previous messages
      // ctx.deleteMessage();

      await ctx.telegram.sendMessage(ctx.chat.id, 'Select Country', {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'INDIA',
                //   ? need to add data for countries
                callback_data: 'Ind'
              },
              {
                text: 'USA',
                callback_data: 'Us'
              },
              {
                text: 'RUSSIA',
                callback_data: 'data'
              },
              {
                text: 'EGYPT',
                callback_data: 'data'
              },
              {
                text: 'BRAZIL',
                callback_data: 'data'
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
    // ? india
    bot.action('Ind', async (ctx: any) => {
      ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In India : ${india}`);
    });
    // ? USA
    bot.action('Us', async (ctx: any) => {
      ctx.telegram.sendMessage(ctx.chat.id, `Total Pouplation In USA : ${usa}`);
    });

    bot.action('MR', async (ctx: any) => {
      ctx.telegram.sendMessage(ctx.chat.id, 'List 2', {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'JAPAN',
                callback_data: 'Data'
              },
              {
                text: 'NIGERIA',
                callback_data: 'data'
              },
              {
                text: 'PHILLIPPINES',
                callback_data: 'data'
              },
              {
                text: 'MEXICO',
                callback_data: 'data'
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
                callback_data: 'data'
              },
              {
                text: 'BANGLADESH',
                callback_data: 'data'
              },
              {
                text: 'VIETNAM',
                callback_data: 'data'
              },
              {
                text: 'CONGO',
                callback_data: 'data'
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
                callback_data: 'data'
              },
              {
                text: 'TURKEY',
                callback_data: 'data'
              },
              {
                text: 'THAILAND',
                callback_data: 'data'
              },
              {
                text: 'GERMANY',
                callback_data: 'data'
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
                callback_data: 'data'
              },
              {
                text: 'CHINA',
                callback_data: 'data'
              },
              {
                text: 'PAKISTHAN',
                callback_data: 'data'
              }
            ]
          ]
        }
      });

      ctx.reply('End Of The Page');
    });
  });
};

export default countryDataFetch;
