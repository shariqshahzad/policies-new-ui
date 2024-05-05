import * as React from 'react';
import { BusinessNavigation, Footer, IndividualsNavigation, useAuth } from '@takamol/react-qiwa-core';
import { Box } from '@takamol/qiwa-design-system/components';

interface ProcessLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProcessLayout = ({ children }: ProcessLayoutProps) => {
  const { accountType } = useAuth();

  if (accountType === 'business') {
    return (
      <div>
        <BusinessNavigation variant="process" />
        <Box direction="row" align="stretch">
          <Box>{children}</Box>
        </Box>
        <Footer variant="process" />
      </div>
    );
  }

  return (
    <div>
      <IndividualsNavigation variant="process" />
      <Box>{children}</Box>
      <Footer variant="process" />
    </div>
  );
};

export default ProcessLayout;
