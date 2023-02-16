import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';

/**
 * @description Fetch World Total Population
 */
const worldPopulation = async () => {
  const browser = await puppeteer.launch({ headless: true, timeout: 0 });

  const page = (await browser.pages())[0];

  await page.goto('https://www.worldometers.info/world-population');

  const scrap = await (
    await (await page.$x("//span [@class ='rts-counter']"))[0].getProperty('textContent')
  ).jsonValue();

  const data = {
    worldPopulationCount: scrap
  };

  const parsedVal = JSON.stringify(data);

  await fs.writeFile(path.resolve(__dirname, '../../Database/overAll.json'), parsedVal);
};

export default worldPopulation;
