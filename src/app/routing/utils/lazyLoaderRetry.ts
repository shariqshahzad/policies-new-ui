import type { ComponentType } from 'react';

export const lazyLoaderRetry =
  <T extends ComponentType>(componentImport: () => Promise<{ default: T }>, name?: string) =>
  (): Promise<{ default: T }> => {
    const ssKey = name ? `retry-${name}-refreshed` : 'retry-lazy-refreshed';

    return new Promise((resolve, reject) => {
      const hasRefreshed = JSON.parse(window.sessionStorage.getItem(ssKey) ?? 'false') as boolean;
      componentImport()
        .then((component) => {
          window.sessionStorage.setItem(ssKey, 'false');
          resolve(component);
        })
        .catch((error) => {
          if (!hasRefreshed) {
            window.sessionStorage.setItem(ssKey, 'true');
            return window.location.reload();
          }
          reject(error);
        });
    });
  };
