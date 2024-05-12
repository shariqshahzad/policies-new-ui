import {
  Menu,
  Box,
  NavigationGroup,
  Link,
  Text,
  MenuTrigger,
  Navigation,
  Icon,
} from '@takamol/qiwa-design-system/components';
import { Globe, User } from '@takamol/qiwa-design-system/icons';
import { useWindowUtils } from '@takamol/qiwa-design-system/utils';
import { i18nContextManager } from '@takamol/react-qiwa-core';
import React from 'react';
import { useLocale } from 'src/app/translations/hooks/useLocale';

import qiwaTransparentLogo from 'src/assets/images/qiwa-logo-header.svg';

interface AdminLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { t, locale, setLocale } = useLocale();
  const { isMobileWidth } = useWindowUtils();
  return (
    <div>
      <Box bgColor="grayscale_800">
        <Box height={72} width={'100%'} justify={'space-between'} direction="row">
          <Box maxWidth={100} justify={'center'}>
            <img src={qiwaTransparentLogo} alt="" loading="lazy" />
          </Box>
          {/* <Navigation variant="business">

    </Navigation> */}
          {isMobileWidth ? null : (
            <Box margin={10} align="center" justify="flex-start" direction="row" height={45}>
              <Box margin={10} width="fit-content" align="center" justify="flex-start" direction="row" height={45}>
                <MenuTrigger
                  iconColor="business_50"
                  menuOffset={[0, 33]}
                  menuPlacement="bottom"
                  triggerElement={
                    <Box align="center" direction="row" width="fit-content">
                      {/* <Icon background="business_100" color="grayscale_800" iconComponent={User} padding={8} size={24} /> */}
                      <Text variant="body-l" weight="medium" color="business_50">
                        Policies
                      </Text>
                    </Box>
                  }
                >
                  <Menu maxWidth={300}>
                    <Menu.Section>
                      <Link href='/'>
                        <NavigationGroup.Item color="business_500">Policy Review Requests</NavigationGroup.Item>
                      </Link>
                      <Link href='/'>
                        <NavigationGroup.Item color="business_500">Old Policies</NavigationGroup.Item>
                      </Link>
                      {/* <Box bgColor="danger_100" height={50}>

  </Box> */}
                    </Menu.Section>
                  </Menu>
                </MenuTrigger>
              </Box>
              <Box margin={10} width="fit-content" align="center" justify="flex-start" direction="row" height={45}>
                <MenuTrigger
                  iconColor="business_50"
                  menuOffset={[0, 33]}
                  menuPlacement="bottom"
                  triggerElement={
                    <Box align="center" direction="row" gap={8} width="fit-content">
                      <Text variant="body-l" weight="medium" color="business_50">
                        Companies
                      </Text>
                    </Box>
                  }
                >
                  <Menu maxWidth={300}>
                  <Menu.Section>
                      <Link href='/companies'>
                        <NavigationGroup.Item color="business_500">Companies</NavigationGroup.Item>
                      </Link>
                      <Link href='/company-clerks'>
                        <NavigationGroup.Item color="business_500">Company Clerks</NavigationGroup.Item>
                      </Link>
                      {/* <Box bgColor="danger_100" height={50}>

  </Box> */}
                    </Menu.Section>
                  </Menu>
                </MenuTrigger>
              </Box>
              <Box margin={10} width="fit-content" align="center" justify="flex-start" direction="row" height={45}>
                <MenuTrigger
                  iconColor="business_50"
                  menuOffset={[0, 33]}
                  menuPlacement="bottom"
                  triggerElement={
                    <Box align="center" direction="row" width="fit-content">
                      {/* <Icon background="business_100" color="grayscale_800" iconComponent={User} padding={8} size={24} /> */}
                      <Text variant="body-l" weight="medium" color="business_50">
                        Law Offices
                      </Text>
                    </Box>
                  }
                >
                  <Menu maxWidth={300}>
                  <Menu.Section>
                      <Link href='/law-office-infos'>
                        <NavigationGroup.Item color="business_500">Law Office Infos</NavigationGroup.Item>
                      </Link>
                      <Link href='/company-clerks'>
                        <NavigationGroup.Item color="business_500">Company Clerks</NavigationGroup.Item>
                      </Link>
                      {/* <Box bgColor="danger_100" height={50}>

  </Box> */}
                    </Menu.Section>
                  </Menu>
                </MenuTrigger>
              </Box>
              <Box margin={10} align="center" direction="row" width="fit-content">
                {/* <Icon background="business_100" color="grayscale_800" iconComponent={User} padding={8} size={24} /> */}
                <Link href="/companies" isUnderlined={false}>
                  <Text variant="body-l" weight="medium" color="business_50">
                    Companies Status
                  </Text>
                </Link>
              </Box>
              <Box margin={10} align="center" direction="row" width="fit-content">
                {/* <Icon background="business_100" color="grayscale_800" iconComponent={User} padding={8} size={24} /> */}
                <Link href="/mlsd_contact_infos" isUnderlined={false}>
                  <Text variant="body-l" weight="medium" color="business_50">
                    MHRSD Contact Information
                  </Text>
                </Link>
              </Box>
              <Box margin={10} align="center" direction="row" width="fit-content">
                {/* <Icon background="business_100" color="grayscale_800" iconComponent={User} padding={8} size={24} /> */}
                <Link href="/activity-records" isUnderlined={false}>
                  <Text variant="body-l" weight="medium" color="business_50">
                    Activity records
                  </Text>
                </Link>
              </Box>
            </Box>
          )}

          {isMobileWidth ? null : (
            <Box margin={10} mt={12} width="fit-content" justify="flex-end" direction="row" height={45}>
              <MenuTrigger
                iconColor="business_50"
                menuOffset={[0, 33]}
                menuPlacement="bottom"
                triggerElement={
                  <Box align="center" direction="row" gap={8} width="fit-content">
                    <Icon background="business_100" color="grayscale_800" iconComponent={Globe} padding={8} size={24} />
                    <Text variant="body-l" weight="medium" color="business_50">
                      {locale.toUpperCase()}
                    </Text>
                  </Box>
                }
              >
                <Menu maxWidth={300}>
                  <Menu.Section>
                    <NavigationGroup.Item
                      onClick={() => {
                        setLocale('en');
                      }}
                      isActive={locale === 'en'}
                      color="business_500"
                    >
                      English (EN)
                    </NavigationGroup.Item>
                    <NavigationGroup.Item
                      onClick={() => {
                        setLocale('ar');
                      }}
                      isActive={locale === 'ar'}
                      color="business_500"
                    >
                      Arabic (AR)
                    </NavigationGroup.Item>
                  </Menu.Section>
                </Menu>
              </MenuTrigger>
            </Box>
          )}
        </Box>
      </Box>

      <Box>{children}</Box>
    </div>
  );
};

export default AdminLayout;
