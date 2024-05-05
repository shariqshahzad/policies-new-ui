import type React from 'react';
import axe from '@axe-core/react';
import ReactDOM from 'react-dom';

export const axeTimeout = 3000;

export const reportAccessibilityIssue = (App: typeof React, config?: Record<string, unknown>, timeout?: number) =>
  axe(App, ReactDOM, timeout ?? axeTimeout, config, {
    include: [['html']],
  });
