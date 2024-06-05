import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data.toString());

    const newContact = createFakeContact();

    const updatedContacts = [...contacts, newContact];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log(`Added one new contact`);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

await addOneContact();
