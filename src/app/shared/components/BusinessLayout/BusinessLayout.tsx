import { Box, Drawer, IconButton } from '@takamol/qiwa-design-system/components';
import { Close } from '@takamol/qiwa-design-system/icons';
import { useWindowUtils } from '@takamol/qiwa-design-system/utils';
import { BusinessNavigation, Footer, Sidebar, useDrawerVisibility } from '@takamol/react-qiwa-core';
import React from 'react';

interface LayoutProps {
  isPublic?: boolean;
  children: JSX.Element | JSX.Element[];
}

const BusinessLayout = ({ children }: LayoutProps) => {
  const { isDrawerOpened, closeDrawer } = useDrawerVisibility();
  const { isMobileWidth, isTabletWidth, isSmallDesktopWidth } = useWindowUtils();
  const isFullDesktopWidth = !isTabletWidth && !isMobileWidth && !isSmallDesktopWidth;

  return (
    <div>
      <BusinessNavigation />
      {/* <Box direction="row" align="stretch">
        {isFullDesktopWidth && <Sidebar />}
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
              <Sidebar />
            </Box>
          </Drawer>
        )}
        <Box>{children}</Box>
      </Box> */}
      <Footer />
    </div>
  );
};

export default BusinessLayout;
