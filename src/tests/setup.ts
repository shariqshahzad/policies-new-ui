import '@testing-library/jest-dom';
import 'jest-styled-components';

import { server } from './testsServer';

export default global.matchMedia = function (query) {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};

jest.mock('src/app/translations/hooks/useLocale', () => ({
  __esModule: true,
  useLocale: () => ({
    t: (key: string) => key,
    locale: 'en',
  }),
}));

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'warn' });
});
afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
