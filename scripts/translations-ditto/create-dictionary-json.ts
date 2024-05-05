import fs from 'fs';

import { replaceNumbersWithVar } from './replaceNumbersWithVar';
import { Dictionary } from './types';

const path = process.argv[2];

const raw = fs.readFileSync(path);
const rawJSON = JSON.parse(raw.toString());

let dictionary: Dictionary[] = [];

for (const key in rawJSON) {
  const value = rawJSON[key];

  if (!value?.text || !value?.variants?.ar?.text) {
    continue;
  }

  dictionary.push({
    text: value.text,
    textVar: replaceNumbersWithVar(value.text),
    variantAr: value.variants.ar.text,
    variantArVar: replaceNumbersWithVar(value.variants.ar.text),
  });
}

if (!dictionary) {
  throw new Error("Couldn't create a dictionary from source. Check if the source file is correct");
}

dictionary = [...new Map(dictionary.map((item) => [item.text, item])).values()];

export default dictionary;
