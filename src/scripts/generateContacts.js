import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data.toString());

    const newContacts = Array.from({ length: number }, createFakeContact);

    const updatedContacts = [...contacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log(
      `Added ${number} new contacts. Total contacts: ${updatedContacts.length}`,
    );
  } catch (error) {
    console.log('Error generating contacts:', error);
  }
};

const args = process.argv.slice(2);
const number = parseInt(args[0], 10) || 5;


await generateContacts(number);
