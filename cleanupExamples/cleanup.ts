import { promises as fs } from 'fs';
import path from 'path';

const rootDir = path.resolve(__dirname, '../');

const deleteFile = async (filePath: string) => {
  await fs.rm(filePath, { recursive: true });
};

const updateEnvFile = async (filePath: string) => {
  const content = await fs.readFile(filePath, { encoding: 'utf8' });
  const contentWithoutExamples = content
    .split('\n')
    .filter((line) => !line.startsWith('EXAMPLE_API_URL'))
    .join('\n');
  await fs.writeFile(filePath, contentWithoutExamples);
};

const updateEnvFiles = async () => {
  console.log('Step 1: removing example keys in all of environment variables');
  try {
    const envFilePaths = [
      '.env.test',
      '.env.example',
      '.env.local',
      '.env.demo',
      '.env.stage',
      '.env.qa',
      '.env.uat',
      '.env.prod',
    ];
    const envFiles = envFilePaths.map((filePath) => path.join(rootDir, filePath));

    for (const filePath of envFiles) {
      await updateEnvFile(filePath);
    }
  } catch (error) {
    console.error('Error during cleanup of envs (Step 1)', error);
  }
};

const deleteExampleFeaturesDirectories = async () => {
  console.log('Step 2: removing example feature implementations');
  try {
    const directoryPaths = ['src/app/exampleDashboard', 'src/app/examplePublicDashboard'];
    const directoriesToDelete = directoryPaths.map((dirPath) => path.join(rootDir, dirPath));

    for (const dirPath of directoriesToDelete) {
      await deleteFile(dirPath);
    }
  } catch (error) {
    console.error('Error during cleanup of example features (Step 2)', error);
  }
};

const deleteExampleTranslationKeys = async (filePath: string) => {
  const content = await fs.readFile(filePath, { encoding: 'utf8' });
  const json = JSON.parse(content);

  const updatedJson = Object.keys(json).reduce((acc, key) => {
    if (!key.startsWith('EXAMPLE') && !key.startsWith('BASE')) {
      acc[key] = json[key];
    }

    return acc;
  }, {});

  await fs.writeFile(filePath, JSON.stringify(updatedJson, null, 2));
};

const updateTypeDefinitions = async () => {
  const typeDefinitionsPath = 'src/app/translations/i18n/messages.d.ts';
  const cleanedContent = `export interface Messages {
    PAGE_TITLE: string;
  }
  `;

  await fs.writeFile(typeDefinitionsPath, JSON.stringify(cleanedContent, null, 2));
};

const updateDittoDictionary = async () => {
  const dittoJsonPath = 'src/app/translations/i18n/dictionary/dictionary.json';
  const cleanedContent = `{
    "PAGE_TITLE": {
      "text": "Qiwa - Dashboard Template",
      "api_id": "PAGE_TITLE",
      "component_api_id": "PAGE_TITLE",
      "variants": { "ar": { "text": "Qiwa - نموذج لوحة القيادة" } }
    }
  }`;

  await fs.writeFile(dittoJsonPath, JSON.stringify(cleanedContent, null, 2));
};

const deleteExampleTranslations = async () => {
  console.log('Step 3: removing example translations');
  try {
    const translationsFilePaths = [
      'src/app/translations/i18n/locale/ar.json',
      'src/app/translations/i18n/locale/en.json',
    ];
    const translationFiles = translationsFilePaths.map((name) => path.join(rootDir, name));

    for (const path of translationFiles) {
      await deleteExampleTranslationKeys(path);
    }

    await updateTypeDefinitions();
    await updateDittoDictionary();
  } catch (error) {
    console.error('Error during cleanup of translation files (Step 3)', error);
  }
};

const clearRouteEnums = async (filePath: string) => {
  try {
    const content = await fs.readFile(filePath, { encoding: 'utf8' });
    const contentWithoutExamples = content
      .split('\n')
      .filter((line) => !line.trim().startsWith('example'))
      .join('\n');
    await fs.writeFile(filePath, contentWithoutExamples);
  } catch (error) {
    console.error(`Error updating translation file ${filePath}: ${error}`);
  }
};

const cleanupRouteEnums = async () => {
  try {
    console.log('Step 4: cleanup of Route Enums');
    const routeEnumsToDeletePaths = [
      'src/app/routing/enums/PublicRoute.enum.ts',
      'src/app/routing/enums/SharableServiceRoute.ts',
    ];
    const routeEnumsToCleanupPaths = ['src/app/routing/enums/AuthRoute.enum.ts'];

    for (const path of routeEnumsToDeletePaths) {
      await deleteFile(path);
    }

    for (const path of routeEnumsToCleanupPaths) {
      clearRouteEnums(path);
    }
  } catch (error) {
    console.error('Error during cleanup of route enums (Step 4)', error);
  }
};

const cleanupRoutes = async () => {
  try {
    console.log('Step 5: cleanup of application Routes');
    const filePath = 'src/app/routing/components/Routes/Routes.tsx';
    const cleanedContent = `import { Box } from '@takamol/qiwa-design-system/components';
import { ErrorPage, PrivateRoute } from '@takamol/react-qiwa-core';
import * as React from 'react';
import { Route, createRoutesFromElements } from 'react-router-dom';

import { App } from 'src/App';
import { Layout } from 'src/app/shared/components/Layout';
import { createBrowserRouterWithSentry } from '../../../integrations/sentry';
import { AuthRoute } from '../../enums/AuthRoute.enum';
import { CoreRoute } from '../../enums/CoreRoute.enum';
import { BubbleError } from '../BubbleError';
import { OutletWithPageLoader } from 'src/app/shared/components/OutletWithPageLoader';

const AppRouter = createBrowserRouterWithSentry(
  createRoutesFromElements(
    <Route path="/" errorElement={<BubbleError />} element={<App />}>
      <Route
        element={
          <Layout>
            <PrivateRoute>
              <OutletWithPageLoader />
            </PrivateRoute>
          </Layout>
        }
      >
        <Route
          path={AuthRoute.dashboard}
          element={
            <Box pt={24} pb={16} gap={16} direction="row" align="center">
              <p>Example page</p>
            </Box>
          }
        />
      </Route>

      {/* Error handling routes */}
      <Route path={CoreRoute.error} element={<ErrorPage errorType="error" />} />
      <Route path={CoreRoute.badGateway} element={<ErrorPage errorType="bad-gateway" />} />
      <Route path={CoreRoute.unavailable} element={<ErrorPage errorType="unavailable" />} />
      <Route path={CoreRoute.notVerified} element={<ErrorPage errorType="not-verified" />} />
      <Route path={CoreRoute.sessionExpiry} element={<ErrorPage errorType="session-expiry" />} />
      <Route path={CoreRoute.gatewayTimeout} element={<ErrorPage errorType="gateway-timeout" />} />
      <Route path={CoreRoute.unauthorized} element={<ErrorPage errorType="unauthorized" />} />
      <Route path="*" element={<ErrorPage errorType="not-found" />} />
    </Route>,
  ),
);

export default AppRouter;
`;
    await fs.writeFile(filePath, cleanedContent);
  } catch (error) {
    console.error('Error during cleanup of Routes (Step 5)', error);
  }
};

const removeRestFile = async () => {
  const filePath = 'src/tests/rest.ts';
  await deleteFile(filePath);
};

const updateHandlers = async () => {
  const filePath = 'src/mocks/handlers.ts';
  const baseContent = `import { createHandlerMocks } from '@takamol/react-qiwa-core';

export const handlers = [...createHandlerMocks()];
`;

  await fs.writeFile(filePath, baseContent);
};

const cleanupHandlers = async () => {
  console.log('Step 6: cleanup of handlers');
  try {
    await removeRestFile();
    await updateHandlers();
  } catch (error) {
    console.error('Error cleanup of handlers (Step 6)');
  }
};

const removeIrrelevantSharedComponents = async () => {
  const irrelevantComponentsPaths = [
    'src/app/shared/components/LawOfficeLayout',
    'src/app/shared/components/ProcessLayout',
    'src/app/shared/components/PublicBusinessLayout',
    'src/app/shared/components/PublicIndividualsLayout',
    'src/app/shared/components/UnifiedPortalLayout',
    'src/app/shared/components/AccountAndNavigationLayout',
    'src/app/shared/components/TableOfContents',
  ];

  try {
    console.log('Step 7: example layouts');
    for (const path of irrelevantComponentsPaths) {
      await deleteFile(path);
    }
  } catch (error) {
    console.error('Error during removing irrelevant UI files (Step 7)');
  }
};

const cleanupPackageJson = async () => {
  try {
    console.log('Step 8: cleanup of package.json');
    const packageJsonPath = 'package.json';
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));
    delete packageJson.scripts['cleanup-examples'];
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  } catch (error) {
    console.error('Error during cleanup of package.json (Step 8)');
  }
};

const removeScriptFile = async () => {
  const scriptDirectoryPath = 'cleanupExamples';
  await fs.rm(scriptDirectoryPath, { recursive: true, force: true });
};

const cleanup = async () => {
  await updateEnvFiles();
  await deleteExampleFeaturesDirectories();
  await deleteExampleTranslations();
  await cleanupRouteEnums();
  await cleanupRoutes();
  await cleanupHandlers();
  await removeIrrelevantSharedComponents();
  await cleanupPackageJson();
  await removeScriptFile();
  console.log('Cleanup completed. Please run: "npm run lint"');
};

cleanup();
