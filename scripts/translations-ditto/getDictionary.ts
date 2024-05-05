import fs from 'fs';

import { AcceptableFileTypes, Dictionary } from './types';
import { OUTPUT_FOLDER } from './constants';

export const getDictionary = async () => {
  let dictionary: Dictionary[] = [];

  // Get file path
  const path = process.argv[2];
  // Get file type
  const type = (path.split('.').pop() ?? '') as AcceptableFileTypes;

  if (!['json', 'xlsx'].includes(type)) {
    throw new Error('Incorrect or missing I18N_DICTIONARY_SRC in env file. Values: json or xlsx');
  }

  const data = await import(`./create-dictionary-${type}`);
  dictionary = data.default;

  if (!dictionary.length) {
    throw new Error('Created an empty dictionary. Check your dictionary source file.');
  }

  if (!fs.existsSync(OUTPUT_FOLDER)) {
    fs.mkdirSync(OUTPUT_FOLDER);
  }

  // Write out a dictionary file for debugging
  fs.writeFile(`${OUTPUT_FOLDER}/dictionary.json`, JSON.stringify(dictionary), (err) => {
    if (err) {
      console.error(err);
    }

    console.log(`Created a dictionary from ${type.toUpperCase()} source with ${dictionary.length} elements.`);
  });

  return dictionary;
};
