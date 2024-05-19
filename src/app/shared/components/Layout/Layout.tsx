import React from 'react';
import { useAuth } from '@takamol/react-qiwa-core';

import { BusinessLayout } from '../BusinessLayout';
import { IndividualsLayout } from '../IndividualsLayout';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  const { accountType } = useAuth();

  return <BusinessLayout>{children}</BusinessLayout>;

  return <IndividualsLayout>{children}</IndividualsLayout>;
};

export default Layout;
