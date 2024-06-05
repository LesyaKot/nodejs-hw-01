import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data.toString());
    return contacts.length;
  } catch (error) {
    console.log('Error counting contacts', error);
  }
};

console.log(await countContacts());
