import fs from 'fs/promises';
import path from 'path';

// ? Declare Path as Global
const dataPath = path.resolve(__dirname, '../Database/userHistory.json');

/**
 *
 * @param filePath
 * @returns return a date from file
 */
async function readFile(filePath: any) {
  try {
    const data = await fs.readFile(filePath);
    return data.toString();
  } catch (err) {
    return err;
  }
}

/**
 *
 * @param file
 * @returns Write a file for specific path
 */
async function writeFiles(file: any) {
  try {
    const parsed = JSON.stringify(file);

    const data = await fs.writeFile(dataPath, parsed);
    return data;
  } catch (err) {
    return err;
  }
}

const writeFileSystem = async (fileData: any) => {
  try {
    const read = (await readFile(dataPath)) as any;

    const parsedata = read === '' ? [] : JSON.parse(read);

    parsedata.push(fileData);

    await writeFiles(parsedata);
  } catch (err) {
    console.log(err);

    return err;
  }
};

export { writeFileSystem, readFile };
