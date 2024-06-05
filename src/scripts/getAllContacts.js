import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data.toString());

    return contacts;
  } catch (error) {
    console.log('error getting all contacts', error);
  }
};
console.log(await getAllContacts());
