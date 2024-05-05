import fs from 'fs';

const generateMessagesKeysType = (localePath: string) => {
  const translations = fs.readFileSync(localePath, 'utf-8');

  const types = Object.keys(JSON.parse(translations)).reduce((acc, key) => {
    acc += `  '${key}': string;\n`;

    return acc;
  }, '');

  return `export interface Messages {\n${types}}\n`;
};

const localeTypes = generateMessagesKeysType('src/app/translations/i18n/locale/en.json');

fs.writeFileSync('src/app/translations/i18n/messages.d.ts', localeTypes);
