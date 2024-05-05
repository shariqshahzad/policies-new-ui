import * as React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';
import { UnifiedPortalNavigation, PublicFooter } from '@takamol/react-qiwa-core';

const UnifiedPortalLayout = ({ children }: React.PropsWithChildren) => {
  // logout from internal session of sharable service
  const handleLogout = () => {
    alert('logout action from service session');
  };

  // this data should comming from internal session of sharable service
  const sessionData = {
    userName: 'Abbad Masood',
    companyId: '1-2300423445',
    serviceName: 'Contract Management',
  };

  return (
    <>
      <UnifiedPortalNavigation
        userName={sessionData.userName}
        companyId={sessionData.companyId}
        serviceName={sessionData.serviceName}
        onLogout={handleLogout}
      />
      <Box>{children}</Box>
      <PublicFooter />
    </>
  );
};

export default UnifiedPortalLayout;
