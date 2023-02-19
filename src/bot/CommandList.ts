import { botMessage } from '../../Interface/botMessage';
import getCountry from './commands/Country';
import worldCountDetails from './commands/OverallCount';
import stateDetails from './commands/States';

const TGCommands = async (arg: any) => {
  // ? Fetch Country Data
  await getCountry(arg);

  // ? fetch Overall Data
  await worldCountDetails(arg);

  // ? fetch State Details
  await stateDetails(arg);
};

export default TGCommands;
