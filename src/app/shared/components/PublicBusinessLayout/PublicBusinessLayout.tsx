import { Box } from '@takamol/qiwa-design-system/components';
import { PublicBusinessNavigation, PublicFooter } from '@takamol/react-qiwa-core';
import * as React from 'react';

const PublicBusinessLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <PublicBusinessNavigation />
      <Box>{children}</Box>
      <PublicFooter />
    </>
  );
};

export default PublicBusinessLayout;
