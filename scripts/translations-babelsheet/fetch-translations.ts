import { fromBabelsheet } from 'babelsheet2-reader';
import { groupBy, mergeMap } from 'rxjs/operators';
import path from 'path';
import * as dotenv from 'dotenv';

import { writeJSONFile } from './writeJSONFile';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const projectRoot = path.relative(__dirname, process.cwd());
// eslint-disable-next-line @typescript-eslint/no-var-requires
const credentials = require(path.join(projectRoot, './.credentials.json')) as Record<string, string>;
const spreadsheetId = process.env.TRANSLATIONS_SPREADSHEET_ID ?? '';

fromBabelsheet({ spreadsheetId, credentials })
  .pipe(
    groupBy(({ language }) => language, {
      element: ({ path: elementPath, ...entry }) => ({ ...entry, path: elementPath.join('.') }),
    }),
    mergeMap((languageEntries$) =>
      languageEntries$.pipe(writeJSONFile(`./src/app/translations/i18n/locale/${languageEntries$.key}.json`)),
    ),
  )
  .subscribe(({ filePath, entryCount }) => {
    // eslint-disable-next-line no-console
    console.log(`Wrote file: "${filePath}" with ${entryCount} entries`);
  });
