import express from 'express';
import { config } from 'dotenv';
import telegramBot from './bot/Telegram';
import countryPopulationList from './data/ScrappedData';
import worldPopulation from './data/WorldPopulation';

// ? config env
config();

const { TOKEN, PORT } = process.env;

const app = express();

app.use(express.json());

telegramBot(TOKEN as string);

(async () => {
  await countryPopulationList();
  await worldPopulation();
})();

app.listen(PORT || 5232, async () => {
  console.log(`Server Listening`);
});
