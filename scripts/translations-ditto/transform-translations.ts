import fs from 'fs';

import enJson from '../../src/app/translations/i18n/locale/en.json';

import { getDictionary } from './getDictionary';
import { OUTPUT_FOLDER } from './constants';
import { replaceBracketsWithVars } from './replaceBracketsWithVar';
import { overwriteVars } from './overwriteVars';

getDictionary().then((dictionary) => {
  const formatForSearch = (text) => {
    const t = text
      .trim()
      .toLowerCase()
      .replace(/(\r\n|\n|\r)/gm, '') // Remove newline characters
      .replace(/[^a-zA-Z {}\d]/gm, ''); // Ignore special characters and doc formatting characters
    return t;
  };

  const total = Object.keys(enJson).length;
  const matches = {};
  const misses = {};

  for (const key in enJson) {
    let target = enJson[key];
    let found = dictionary.find(({ text = '' }: { text: string }) => formatForSearch(text) === formatForSearch(target));

    if (found) {
      matches[key] = found.variantAr;
      continue;
    }

    const valueOriginal = enJson[key];
    target = replaceBracketsWithVars(valueOriginal);

    found = dictionary.find(({ textVar = '' }) => formatForSearch(textVar) === formatForSearch(target));

    if (found) {
      matches[key] = overwriteVars(valueOriginal, found.variantArVar);
    } else {
      misses[key] = valueOriginal;
    }
  }

  const found = Object.keys(matches).length;

  const content = JSON.stringify({ ...matches, ...misses });

  fs.writeFile(`${OUTPUT_FOLDER}/ar.json`, content, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`File path: ${OUTPUT_FOLDER}/ar.json`);
    console.log(`Translated ${found} out of ${total} keys. Success rate: ${((found / total) * 100).toFixed(2)}%`);
    console.log('----------------------');
    console.log('NEXT STEPS');
    console.log(
      'Check the ar.json file manually. Missing translations are located at the end of the file. Update missing values manually. When finished, move it to locale folder, delete generated folder, and git commit the updated file.',
    );
  });
});
