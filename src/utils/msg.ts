import writeFileSystem from '../../Models/storeFiles';
import { botMessage } from '../../Interface/botMessage';

const botScrapData = async (arg: botMessage) => {
  //
  const getDay = new Date(arg.message.date * 1000).toLocaleString('en-US', {
    timeZone: 'Asia/kolkata'
  });

  const ob = {
    user_Id: arg.message.from.id,
    first_Name: arg.message.from.first_name,
    user_Name: arg.message.from.username,
    msg_ID: arg.message.message_id,
    user_Messages: arg.message.text,
    messaged_Date: getDay
  };
  const response = JSON.stringify(ob);
  await writeFileSystem(response);

  return ob;
};

export default botScrapData;
