import { botMessage } from '../../Interface/botMessage';
import countryDataFetch from './commands/countries';

const botCommands = async (arg: any) => {
  // ? Fetch Country Data
  await countryDataFetch(arg);
};

export default botCommands;
