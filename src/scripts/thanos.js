import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data.toString());

    const filteredContacts = contacts.filter(() => Math.random() > 0.5);

    await fs.writeFile(PATH_DB, JSON.stringify(filteredContacts, null, 2));
  } catch (error) {
    console.log('Error doing thanos', error);
  }
};

await thanos();
