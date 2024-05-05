import { AppProviders } from '@takamol/react-qiwa-core';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import TagManager from 'react-gtm-module';

async function requestConfig(configJson: string) {
  return fetch(configJson)
    .then((res) => {
      return res.json().catch(() => {
        // eslint-disable-next-line no-console
        console.error('Could not parse json file.');
        throw new Error('Could not parse json file.');
      });
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.error('Could not load config.json file.');
      throw new Error('Could not load config.json file.');
    });
}

export const render = async (envConfig: Record<string, string>) => {
  window.reactQiwaConfig = envConfig;

  const { ErrorBoundary, getEnvironmentVar } = await import('@takamol/react-qiwa-core');

  const { initSentry } = await import('./app/integrations/sentry');
  const { runOpenTelemetry } = await import('./app/integrations/openTelemetry');
  const { messages } = await import('./app/translations/i18n/messages');

  const { RouterProvider } = await import('react-router-dom');
  const { AppRouter } = await import('./app/routing/components/Routes');

  const tagManagerArgs = {
    gtmId: getEnvironmentVar('GTM_TAG'),
  };

  if (process.env.NODE_ENV !== 'production') {
    import('src/mocks/server').then(({ runMockServerWhenEnabled }) => runMockServerWhenEnabled(false));
  }

  if (process.env.NODE_ENV === 'production') {
    TagManager.initialize(tagManagerArgs);
    initSentry();
    runOpenTelemetry({
      serviceName: getEnvironmentVar('OTEL_SERVICE_NAME'),
      collectorURL: getEnvironmentVar('OTEL_URL'),
    });
  }

  const container = document.getElementById('root');
  const root = createRoot(container as Element);
  root.render(
    <AppProviders messages={messages}>
      <ErrorBoundary>
        <RouterProvider router={AppRouter} />
      </ErrorBoundary>
    </AppProviders>,
  );

  if (process.env.NODE_ENV === 'development') {
    const config = {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice', 'ACT', 'section508'],
      },
      disableDeduplicate: false,
    };

    import('src/app/shared/utils/reportAccessiblityIssue').then(({ reportAccessibilityIssue }) =>
      reportAccessibilityIssue(React, config),
    );
  }
};

requestConfig('/config.json').then((config) => render(config));
