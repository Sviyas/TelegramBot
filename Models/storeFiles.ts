import fs from 'fs/promises';
import path from 'path';

// ? Declare Path as Global
const dataPath = path.resolve(__dirname, '../Database/user.json');

async function readFile(filePath: any) {
  try {
    const data = await fs.readFile(filePath);
    return data.toString();
  } catch (err) {
    return err;
  }
}

async function writeFiles(file: any) {
  try {
    const data = await fs.appendFile(dataPath, file);
    return data;
  } catch (err) {
    return err;
  }
}

const writeFileSystem = async (fileData: string) => {
  try {
    const read = await readFile(dataPath);

    if (read === '') {
      await writeFiles(fileData);
    } else {
      await writeFiles(fileData);
    }
  } catch (err) {
    return err;
  }
};

export default writeFileSystem;
