import { botMessage } from '../../Interface/botMessage';
import TGCountryCmd from './commands/Country';

const TGCommands = async (arg: any) => {
  // ? Fetch Country Data
  await TGCountryCmd(arg);
};

export default TGCommands;
