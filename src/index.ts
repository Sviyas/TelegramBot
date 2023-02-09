import express from 'express';
import { config } from 'dotenv';
import scriptBot from './bot/script';

// ? config env
config();

const { TOKEN, PORT } = process.env;

const app = express();

app.use(express.json());

scriptBot(TOKEN as string);

app.listen(PORT || 5232, async () => {
  console.log(`Server Listening`);
});
