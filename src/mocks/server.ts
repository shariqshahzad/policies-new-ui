import { getEnvironmentVar } from '@takamol/react-qiwa-core';
import { setupWorker } from 'msw';

import { handlers } from './handlers';

export const MOCK_SERVER_KEY = 'mockServer';

const toBoolean = (value: string | boolean) => {
  if (typeof value === 'boolean') {
    return value;
  }

  return value.toLowerCase() === 'true';
};

export const runMockServerWhenEnabled = (isForced?: boolean) => {
  // NOTE: Do not use isProd or something similar here, otherwise
  // webpack will not eliminate msw from the production bundle
  if (process.env.NODE_ENV !== 'production') {
    const isMockServerEnabled = toBoolean(getEnvironmentVar('APP_API_MOCK')) || Boolean(isForced);

    if (!isMockServerEnabled) {
      return;
    }

    const server = setupWorker(...handlers);
    server.start();
  }
};
