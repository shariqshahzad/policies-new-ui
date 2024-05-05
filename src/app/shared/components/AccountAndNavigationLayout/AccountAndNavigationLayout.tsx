import * as React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';
import { LanguageAndAccountNavigation, Footer, useAuth } from '@takamol/react-qiwa-core';

const AccountAndNavigationLayout = ({ children }: React.PropsWithChildren) => {
  const { accountType } = useAuth();

  return (
    <>
      <LanguageAndAccountNavigation variant={accountType} />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default AccountAndNavigationLayout;
