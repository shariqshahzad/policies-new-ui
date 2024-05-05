import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useLocale } from 'src/app/translations/hooks/useLocale';

export const App = () => {
  const { t } = useLocale();

  useEffect(() => {
    document.title = t('PAGE_TITLE');
  }, [t]);

  return <Outlet />;
};
