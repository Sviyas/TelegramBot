import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';

/**
 * @returns Fetch population count  each countries
 */
const countryPopulationList = async () => {
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
    headless: true,
    timeout: 0
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
    // console.log(v1);
  }
  // console.log(store);

  const populatioList = {
    India: store[0],
    Usa: store[1],
    Russia: store[2],
    Egypt: store[3],
    Brazil: store[4],
    Japan: store[5],
    Nigeria: store[6],
    Philippines: store[7],
    Mexico: store[8],
    Indonesia: store[9],
    Vietnam: store[10],
    Congo: store[11],
    Ethiopia: store[12],
    Turkey: store[13],
    Thailand: store[14],
    Germany: store[15],
    Iran: store[16],
    China: store[17],
    Pakistan: store[18],
    Bangladesh: store[19]
  };

  const data = JSON.stringify(populatioList);

  await fs.writeFile(path.resolve(__dirname, '../../Database/country.json'), data);
};

export default countryPopulationList;
