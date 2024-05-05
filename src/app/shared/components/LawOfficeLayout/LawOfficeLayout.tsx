import * as React from 'react';
import { useWindowUtils } from '@takamol/qiwa-design-system/utils';
import { BusinessNavigation, Footer, LawOfficeSidebar, useDrawerVisibility } from '@takamol/react-qiwa-core';
import { Box, Drawer, IconButton } from '@takamol/qiwa-design-system/components';
import { Close } from '@takamol/qiwa-design-system/icons';
import { useLocation } from 'react-router-dom';

const policiesHomeLink = 'https://policies.qiwa.info/dashboard';
const workPoliciesUrl = 'https://policies.qiwa.info/work-policies';
const switchEstablishmentUrl = 'https://policies.qiwa.info/company/change_account_type';

const LawOfficeLayout = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();
  const { isDrawerOpened, closeDrawer } = useDrawerVisibility();
  const { isMobileWidth, isTabletWidth, isSmallDesktopWidth } = useWindowUtils();
  const isFullDesktopWidth = !isTabletWidth && !isMobileWidth && !isSmallDesktopWidth;

  const getActiveLinkName = () => {
    const pathName = location.pathname;

    if (pathName.includes('example-law-office-home')) return 'home';

    if (pathName.includes('example-law-office-work-policies')) return 'workPolicies';

    return undefined;
  };

  return (
    <div>
      <BusinessNavigation />
      <Box direction="row" align="stretch">
        {isFullDesktopWidth && (
          <LawOfficeSidebar
            homeUrl={policiesHomeLink}
            workPoliciesUrl={workPoliciesUrl}
            switchEstablishmentUrl={switchEstablishmentUrl}
            activeLink={getActiveLinkName()}
          />
        )}
        {isTabletWidth && (
          <Drawer
            isOpened={isDrawerOpened}
            handleClose={closeDrawer}
            headerContent={<></>}
            positionedAt="start"
            size="small"
          >
            <Box pt={24} gap={40}>
              {!isMobileWidth && (
                <IconButton
                  iconComponent={Close}
                  variant="neutral_ghost"
                  onClick={closeDrawer}
                  borderRadius="rounded"
                  borderWidth={1}
                  size={40}
                  ariaLabel="close sidebar"
                />
              )}
              <LawOfficeSidebar
                homeUrl={policiesHomeLink}
                workPoliciesUrl={workPoliciesUrl}
                switchEstablishmentUrl={switchEstablishmentUrl}
                activeLink={getActiveLinkName()}
              />
            </Box>
          </Drawer>
        )}
        <Box>{children}</Box>
      </Box>
      <Footer />
    </div>
  );
};

export default LawOfficeLayout;
