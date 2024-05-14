import { User } from '@sentry/react';
import {
  useNavigationContext,
  Box,
  MenuTrigger,
  WorkspaceItem,
  Menu,
  Link,
  Avatar,
  Text,
  NavigationGroup,
  Navigation,
  Search,
  FilterChip,
  Notification,
  BoxProps,
  Card,
} from '@takamol/qiwa-design-system/components';
import { Home, Schedule, Company, Suitcase, Graph, Info, Bell, Globe } from '@takamol/qiwa-design-system/icons';
import { useWindowUtils } from '@takamol/qiwa-design-system/utils';
import React, { useState } from 'react';
import BreadCrumb from 'src/components/breadCrumb';

interface AdminLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { isMobileWidth, isTabletWidth, isSmallDesktopWidth } = useWindowUtils();

  const { handleSetIsMobileMenuVisible, variant } = useNavigationContext();
  const [searchValue, setSearchValue] = useState('');

  const handleClick = () => {
    handleSetIsMobileMenuVisible(false);
  };

  const handleSetSearchValue = (value: string) => {
    setSearchValue(value);
  };
  return (
    <>
      <Navigation variant={variant}>
        <Navigation.Action label="Policies" icon={Globe} onClick={handleClick} hasBottomMobileAction>
          <>
            <Menu>
              <Menu.Section>
                <NavigationGroup.Item color="business_500">Policy Review Requests</NavigationGroup.Item>

                <NavigationGroup.Item color="business_500">Old Policies</NavigationGroup.Item>

                {/* <Box bgColor="danger_100" height={50}>
      
        </Box> */}
              </Menu.Section>
            </Menu>
          </>
        </Navigation.Action>
        <Navigation.Action label="Companies" icon={Globe} onClick={handleClick} hasBottomMobileAction>
          <>
            <Menu>
              <Menu.Section>
                <NavigationGroup.Item color="business_500">Policy Review Requests</NavigationGroup.Item>

                <NavigationGroup.Item color="business_500">Old Policies</NavigationGroup.Item>

                {/* <Box bgColor="danger_100" height={50}>
      
        </Box> */}
              </Menu.Section>
            </Menu>
          </>
        </Navigation.Action>
        <Navigation.Action label="Law Offices" icon={Globe} onClick={handleClick} hasBottomMobileAction>
          <>
            <Menu>
              <Menu.Section>
                <NavigationGroup.Item color="business_500">Policy Review Requests</NavigationGroup.Item>

                <NavigationGroup.Item color="business_500">Old Policies</NavigationGroup.Item>

                {/* <Box bgColor="danger_100" height={50}>
      
        </Box> */}
              </Menu.Section>
            </Menu>
          </>
        </Navigation.Action>
        <Navigation.Action label="Companies Status" icon={Globe} onClick={handleClick}>
          {null}
        </Navigation.Action>
        <Navigation.Action label="MHRSD Contact Info" icon={Globe} onClick={handleClick}>
          {null}
        </Navigation.Action>
        <Navigation.Action label="Activity records" icon={Globe} onClick={handleClick}>
          {null}
        </Navigation.Action>
        {!isMobileWidth ? (
          <Navigation.Action label="EN" icon={Globe}>
            <Menu maxWidth={375}>
              <Menu.Section>
                <NavigationGroup activeDecorator="check" variant={variant}>
                  <NavigationGroup.Item onClick={handleClick} isActive={true} href="#0" iconComponent={Globe}>
                    English (EN)
                  </NavigationGroup.Item>
                  <NavigationGroup.Item onClick={handleClick} href="#0" iconComponent={Globe}>
                    (AR) عربي
                  </NavigationGroup.Item>
                </NavigationGroup>
              </Menu.Section>
            </Menu>
          </Navigation.Action>
        ) : null}
        {/* <Navigation.Action label="Abbad Masood" icon={Globe} onClick={handleClick} hasBottomMobileAction>
          <>
            <Menu>
              <Menu.Section>
                <WorkspaceItem
                  name="Muhammad Assad"
                  id="1-2300423445"
                  colorVariant={variant}
                  fontSize="large"
                  fontWeight="semibold"
                  onClick={handleClick}
                />
              </Menu.Section>
              <Menu.Section>
                <NavigationGroup variant={variant}>
                  <NavigationGroup.Item onClick={handleClick} href="#0">
                    Edit profile info
                  </NavigationGroup.Item>
                  <NavigationGroup.Item onClick={handleClick} href="#0">
                    Change password
                  </NavigationGroup.Item>
                </NavigationGroup>
              </Menu.Section>
              <Menu.Section>
                <Link onClick={handleClick} variant={variant} href="#0">
                  Change workspace
                </Link>
              </Menu.Section>
              <Menu.Section>
                <NavigationGroup variant={variant}>
                  <NavigationGroup.Item onClick={handleClick} href="#0">
                    Log out
                  </NavigationGroup.Item>
                </NavigationGroup>
              </Menu.Section>
            </Menu>
            {isMobileWidth ? (
              <Box position="absolute" bottom={0} start={0} width="100vw">
                <Navigation.Language label="EN" backLinkLabel="Back" modalHeading="Select your language">
                  <NavigationGroup activeDecorator="check" variant={variant}>
                    <NavigationGroup.Item onClick={handleClick} isActive={true} href="#0" iconComponent={Globe}>
                      English (EN)
                    </NavigationGroup.Item>
                    <NavigationGroup.Item onClick={handleClick} href="#0" iconComponent={Globe}>
                      (AR) عربي
                    </NavigationGroup.Item>
                  </NavigationGroup>
                </Navigation.Language>
              </Box>
            ) : null}
          </>
        </Navigation.Action> */}
      </Navigation>
      <Box ps={20} bgColor="grayscale_800">
        {/* <Box justify="space-around" height={80} width={'100%'} direction="row"> */}
        <BreadCrumb />
        {/* </Box> */}
      </Box>
      {children}
    </>
  );
};

export default AdminLayout;
