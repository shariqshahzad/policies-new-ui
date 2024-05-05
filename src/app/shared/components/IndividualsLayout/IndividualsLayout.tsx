import { Box } from '@takamol/qiwa-design-system/components';
import { IndividualsNavigation, Footer } from '@takamol/react-qiwa-core';
import * as React from 'react';

const IndividualsLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <IndividualsNavigation />
      <Box minHeight="100vh">{children}</Box>
      <Footer />
    </>
  );
};

export default IndividualsLayout;
