import fs from 'fs';
import excelToJson from 'convert-excel-to-json';

import { replaceNumbersWithVar } from './replaceNumbersWithVar';
import { Dictionary } from './types';

const path = process.argv[2];
const COL_DATA_INDEX = 0;

const MATCH_FOR_CAMELCASE = /[^a-zA-Z0-9]+(.)/gm;

const raw = excelToJson({
  source: fs.readFileSync(path),
});

const sheets = Object.keys(raw);

let dictionary: Dictionary[] = [];

if (!dictionary) {
  throw new Error("Couldn't create a dictionary from source. Check if the source file is correct");
}

sheets.forEach((sheet) => dictionary.push(...raw[sheet]));

const camelize = (text) => {
  return text.toLowerCase().replace(MATCH_FOR_CAMELCASE, function (_, c) {
    return c.toUpperCase();
  });
};

const cols = {};

const colNames = dictionary.splice(COL_DATA_INDEX, 1)[0];

for (const key in colNames) {
  cols[key] = camelize(colNames[key]);
}

const replaceObjectKeys = function (o) {
  const result = {};

  for (const key in o) {
    result[cols[key]] = o[key];
  }

  return result as Dictionary;
};

dictionary = dictionary
  .map((o) => replaceObjectKeys(o))
  .filter(({ text, variantAr }) => Boolean(text) && Boolean(variantAr))
  .map(({ text, variantAr }) => ({
    textVar: replaceNumbersWithVar(text),
    text: text,
    variantAr: variantAr,
    variantArVar: replaceNumbersWithVar(variantAr),
  }));

dictionary = [...new Map(dictionary.map((item) => [item.text, item])).values()];

export default dictionary;
