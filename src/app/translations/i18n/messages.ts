import { type Language } from '@takamol/react-qiwa-core';

import { type TranslationKey } from '../models/TranslationKey';

export const messages: Record<Language, () => Promise<Record<TranslationKey, string>>> = {
  en: () => import('./locale/en.json'),
  ar: () => import('./locale/ar.json'),
};
