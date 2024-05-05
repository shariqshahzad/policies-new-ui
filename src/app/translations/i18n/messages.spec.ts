import { type Language } from '@takamol/react-qiwa-core';

import { type TranslationKey } from '../models/TranslationKey';

import { messages } from './messages';

describe('Messages', () => {
  it('should return messages object', () => {
    const languages = Object.keys(messages) as Language[];

    languages.forEach(async (lang) => {
      const langMessages = await messages[lang]();
      const messageKeys = Object.keys(langMessages).filter((key) => key !== 'default');

      expect(Object.keys(langMessages)).toEqual(expect.arrayContaining(messageKeys));

      messageKeys.forEach((key) => {
        expect(typeof langMessages[key as TranslationKey]).toBe('string');
      });
    });
  });
});
