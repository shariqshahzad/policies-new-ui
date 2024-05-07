import { Menu, Box, NavigationGroup, Link, Text, MenuTrigger } from '@takamol/qiwa-design-system/components';
import React from 'react';

import qiwaTransparentLogo from 'src/assets/images/qiwa-logo-header.svg';

interface AdminLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <Box bgColor="grayscale_800">
        <Box height={72} direction="row">
          <Box margin={10} maxWidth="10%" height={45}>
            <img src={qiwaTransparentLogo} alt="" loading="lazy" />
          </Box>
          {/* <Navigation variant="business">

    </Navigation> */}
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
                    <NavigationGroup.Item color="business_500">Policy Review Requests</NavigationGroup.Item>
                    <NavigationGroup.Item color="business_500">Old Policies</NavigationGroup.Item>
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
                    {/* <Icon background="business_100" color="grayscale_800" iconComponent={User} padding={8} size={24} /> */}
                    <Text variant="body-l" weight="medium" color="business_50">
                      Companies
                    </Text>
                  </Box>
                }
              >
                <Menu maxWidth={300}>
                  <Menu.Section>
                    <NavigationGroup.Item color="business_500">Policy Review Requests</NavigationGroup.Item>
                    <NavigationGroup.Item color="business_500">Old Policies</NavigationGroup.Item>
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
                    <NavigationGroup.Item color="business_500">Policy Review Requests</NavigationGroup.Item>
                    <NavigationGroup.Item color="business_500">Old Policies</NavigationGroup.Item>
                    {/* <Box bgColor="danger_100" height={50}>

  </Box> */}
                  </Menu.Section>
                </Menu>
              </MenuTrigger>
            </Box>
            <Box margin={10} align="center" direction="row" width="fit-content">
              {/* <Icon background="business_100" color="grayscale_800" iconComponent={User} padding={8} size={24} /> */}
              <Link href="companies" isUnderlined={false}>
                <Text variant="body-l" weight="medium" color="business_50">
                  Companies Status
                </Text>
              </Link>
            </Box>
            <Box margin={10} align="center" direction="row" width="fit-content">
              {/* <Icon background="business_100" color="grayscale_800" iconComponent={User} padding={8} size={24} /> */}
              <Link href="companies" isUnderlined={false}>
                <Text variant="body-l" weight="medium" color="business_50">
                  MHRSD Contact Information
                </Text>
              </Link>
            </Box>
            <Box margin={10} align="center" direction="row" width="fit-content">
              {/* <Icon background="business_100" color="grayscale_800" iconComponent={User} padding={8} size={24} /> */}
              <Link href="companies" isUnderlined={false}>
                <Text variant="body-l" weight="medium" color="business_50">
                  Activity records
                </Text>
              </Link>
            </Box>
          </Box>

          {/* <Text variant="heading-m" color="grayscale_0" weight="semibold" as="span" mb={[32, 24]}>
      {t('EXAMPLE_DASHBOARD.TOP_SECTION.WELCOME')}{' HELLOoo'}
      <Text variant="heading-m" color="business_300" weight="semibold" as="span">
        {company?.establishmentName}
      </Text>
    </Text> */}
        </Box>
      </Box>

      <Box>{children}</Box>
    </div>
  );
};

export default AdminLayout;
