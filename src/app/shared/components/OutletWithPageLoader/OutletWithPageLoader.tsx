import React from 'react';
import { Outlet } from 'react-router-dom';

import { PageLoader } from 'src/app/routing/components/PageLoader';

export const OutletWithPageLoader = () => (
  <React.Suspense fallback={<PageLoader />}>
    <Outlet />
  </React.Suspense>
);
