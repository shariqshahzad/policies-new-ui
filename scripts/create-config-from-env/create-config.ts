import { promises as fsPromises } from 'fs';
import { resolve, join } from 'path';

const { readFile, writeFile, mkdir } = fsPromises;
const args = process.argv.slice(2);
const isMock = args.includes('--mock');

const createConfigFromEnv = async ({ isMockServer }: { isMockServer: boolean }) => {
  const rootDir = resolve(__dirname, '../../');
  const envFilePath = join(rootDir, '.env.local');
  const publicDirPath = join(rootDir, 'public');
  const configFilePath = join(publicDirPath, 'config.json');

  try {
    const envContent = await readFile(envFilePath, { encoding: 'utf-8' });
    const config: Record<string, string> = {};

    envContent.split('\n').forEach((line) => {
      const [key, value] = line.split('=');
      if (key && value) {
        config[key.trim()] = value.trim();
      }
    });

    config.HTTPS = isMockServer ? 'false' : 'true';
    config.APP_API_MOCK = isMockServer ? 'true' : 'false';

    await mkdir(publicDirPath, { recursive: true });
    await writeFile(configFilePath, JSON.stringify(config, null, 2), { encoding: 'utf-8' });

    // eslint-disable-next-line no-console
    console.info(`config.json has been created with MOCK set to ${config.APP_API_MOCK}`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred while creating config.json:', error);
  }
};

createConfigFromEnv({ isMockServer: isMock });
