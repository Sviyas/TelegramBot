import express from 'express';
import { config } from 'dotenv';
import telegramBot from './bot/Telegram';
import { countryPopulationList } from './data/ScrappedData';
import { GlobalTypes } from '../Interface/common/index';

// ? config env
config();

const { TOKEN, PORT } = process.env;

const app = express();

app.use(express.json());

telegramBot(TOKEN as string);

declare let global: GlobalTypes;

(async () => {
  await countryPopulationList();
})();

app.listen(PORT || 5232, async () => {
  console.log(`Server Listening`);
});
