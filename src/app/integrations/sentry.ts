import * as Sentry from '@sentry/react';
import { getEnvironmentVar } from '@takamol/react-qiwa-core';
import { useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';

export const initSentry = () =>
  Sentry.init({
    integrations: [
      new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.reactRouterV6Instrumentation(
          useEffect,
          useLocation,
          useNavigationType,
          createRoutesFromChildren,
          matchRoutes,
        ),
        tracePropagationTargets: [],
      }),
      new Sentry.Replay({
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
    dsn: getEnvironmentVar('SENTRY_DSN'),
    environment: getEnvironmentVar('ENVIRONMENT_NAME'),
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 0.1,
    tracesSampleRate: 1.0,
  });

export const createBrowserRouterWithSentry = Sentry.wrapCreateBrowserRouter(createBrowserRouter);
