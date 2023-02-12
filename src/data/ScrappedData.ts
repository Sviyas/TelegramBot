import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';

/**
 * @returns return population of each countries
 */
export const countryPopulationList = async () => {
  console.time('Country Data Time ');
  // ? List of Countries
  const webUrls = [
    'https://countrymeters.info/en/India',
    'https://countrymeters.info/en/United_States_of_America_(USA)',
    'https://countrymeters.info/en/Russian_Federation',
    'https://countrymeters.info/en/Egypt',
    'https://countrymeters.info/en/Brazil',
    'https://countrymeters.info/en/Japan',
    'https://countrymeters.info/en/Nigeria',
    'https://countrymeters.info/en/Philippines',
    'https://countrymeters.info/en/Mexico',
    'https://countrymeters.info/en/Indonesia',
    'https://countrymeters.info/en/Vietnam',
    'https://countrymeters.info/en/Democratic_Republic_of_the_Congo',
    'https://countrymeters.info/en/Ethiopia',
    'https://countrymeters.info/en/Turkey',
    'https://countrymeters.info/en/Thailand',
    'https://countrymeters.info/en/Germany',
    'https://countrymeters.info/en/Iran',
    'https://countrymeters.info/en/China',
    'https://countrymeters.info/en/Pakistan',
    'https://countrymeters.info/en/Bangladesh'
  ];

  // ? accesing browser
  const browser = await puppeteer.launch({
    headless: true
  });
  // ? store countries population data's
  const store = [];
  for (let i = 0; i < webUrls.length; i++) {
    const page = await browser.newPage();
    const url = webUrls[i];
    const promise = page.waitForNavigation({
      waitUntil: 'networkidle2'
    });
    await page.goto(`${url}`);
    await promise;
    const el = await (await (await page.$x("//div [@id ='cp1']"))[0].getProperty('textContent')).jsonValue();

    const v1 = store.push(el);
    console.log(v1);
  }
  // console.log(store);

  const populatioList = {
    india: store[0],
    usa: store[1],
    russia: store[2],
    egypt: store[3],
    brazil: store[4],
    japan: store[5],
    nigeria: store[6],
    philippines: store[7],
    mexico: store[8],
    indonesia: store[9],
    vietnam: store[10],
    cango: store[11],
    ethiopia: store[12],
    turkey: store[13],
    thailand: store[14],
    germany: store[15],
    iran: store[16],
    china: store[17],
    pakistan: store[18],
    bangaladesh: store[19]
  };

  const data = JSON.stringify(populatioList);

  await fs.writeFile(path.resolve(__dirname, '../../Database/country.json'), data);
};
