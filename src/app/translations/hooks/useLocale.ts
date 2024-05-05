import { useCoreLocale } from '@takamol/react-qiwa-core';

import { type TranslationKey } from '../models/TranslationKey';

export const useLocale = () => {
  return useCoreLocale<TranslationKey>();
};
