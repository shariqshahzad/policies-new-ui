import { Box } from '@takamol/qiwa-design-system/components';
import { PublicIndividualsNavigation, PublicFooter } from '@takamol/react-qiwa-core';
import * as React from 'react';

const PublicIndividualsLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <PublicIndividualsNavigation />
      <Box>{children}</Box>
      <PublicFooter accountType="individuals" />
    </>
  );
};

export default PublicIndividualsLayout;
