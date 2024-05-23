import {
  Menu,
  Box,
  NavigationGroup,
  Link,
  Text,
  MenuTrigger,
  Navigation,
  Icon,
  Button,
  ActionsMenu,
  NestedAccordion,
  Divider,
  Drawer,
  NestedMenu,
  Accordion,
} from '@takamol/qiwa-design-system/components';
import { Globe, ThreeDots, User } from '@takamol/qiwa-design-system/icons';
import { useWindowUtils } from '@takamol/qiwa-design-system/utils';
import { i18nContextManager } from '@takamol/react-qiwa-core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocale } from 'src/app/translations/hooks/useLocale';

import qiwaTransparentLogo from 'src/assets/images/qiwa-logo-header.svg';
import BreadCrumb from 'src/components/breadCrumb';
import { navigations } from './Navigation';
import { ActionsMenuItem } from '@takamol/qiwa-design-system/components/ActionsMenu/ActionsMenuItem';

interface AdminLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { t, locale, setLocale } = useLocale();
  const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState<boolean>();
  const { isMobileWidth, isTabletWidth, isSmallDesktopWidth } = useWindowUtils();
  const height = isTabletWidth ? 180 : isSmallDesktopWidth ? 140 : 80;
  const navigate = useNavigate();

  const onClickMobileMenu = () => {
    setIsMobileNavMenuOpen(!isMobileNavMenuOpen);
    console.log('mobile menu');
  };

  return (
    <Box>
      <Box bgColor="grayscale_800">
        <Box align="flex-start" width={'100%'} justify={'space-between'} direction="row">
          <Box margin={10} maxWidth={100} justify={'center'}>
            <img src={qiwaTransparentLogo} alt="" loading="lazy" />
          </Box>
          {/* <Navigation variant="business">

    </Navigation> */}
          {isMobileWidth ? null : (
            <Box align="center" justify="flex-start" wrap={'wrap'} direction="row" height={height}>
              {navigations.map((navigation) => {
                if (navigation.subMenu) {
                  return (
                    <Box mx={10} width="fit-content" align="center" justify="flex-start" direction="row" height={38}>
                      <MenuTrigger
                        iconColor="business_50"
                        menuOffset={[0, 20]}
                        menuPlacement="bottom"
                        triggerElement={
                          <Box align="center" direction="row" width="fit-content">
                            {/* <Icon background="business_100" color="grayscale_800" iconComponent={User} padding={8} size={24} /> */}
                            <Text variant="special-captionSmall" weight="medium" color="business_50">
                              {navigation.title}
                            </Text>
                          </Box>
                        }
                      >
                        {
                          navigation.subMenu.map((subMenuItem, index) => (
                            <ActionsMenu>
                              <ActionsMenuItem variant="individuals" onClick={() => navigate(`${subMenuItem.link}`)}>
                                {subMenuItem.title}
                              </ActionsMenuItem>
                            </ActionsMenu>
                          )) as any
                        }
                      </MenuTrigger>
                    </Box>
                  );
                }
                return (
                  <Box mx={10} width="fit-content" align="center" justify="flex-start" direction="row" height={38}>
                    <Text
                      onClick={() => navigate(navigation?.link)}
                      variant="special-captionSmall"
                      weight="medium"
                      color="business_50"
                    >
                      {navigation.title}
                    </Text>
                  </Box>
                );
              })}
            </Box>
          )}

          {isMobileWidth ? (
            <Box width={'auto'} onClick={() => onClickMobileMenu()} margin={10}>
              <Icon color="business_50" iconComponent={ThreeDots} size={40} />
            </Box>
          ) : (
            <Box margin={10} mt={12} width="fit-content" justify="flex-end" direction="row" height={40}>
              <MenuTrigger
                iconColor="business_50"
                menuOffset={[0, 33]}
                menuPlacement="bottom"
                triggerElement={
                  <Box align="center" direction="row" gap={8} width="fit-content">
                    <Icon background="business_100" color="grayscale_800" iconComponent={Globe} padding={8} size={24} />
                    <Text variant="special-captionSmall" weight="medium" color="business_50">
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
      {isMobileNavMenuOpen ? (
        <Drawer isOpened={true} handleClose={() => {}}>
          {navigations.map((navigation) => {
            if (navigation.subMenu) {
              return (
                <>
                  <Box bgColor="business_50">
                    <Accordion iconPlacement="end" textVariant="small">
                      <Accordion.Item>
                        <Accordion.Header>{navigation.title}</Accordion.Header>
                        <Accordion.Content>
                          {navigation.subMenu.map((subMenu) => (
                            <Box mb={4} bgColor="business_50" padding={10}>
                              <Text mx={8} weight={'bold'}>
                                {subMenu.title}
                              </Text>
                            </Box>
                          ))}
                        </Accordion.Content>
                      </Accordion.Item>
                    </Accordion>
                  </Box>
                  <Divider />
                </>
              );
            }
            return (
              <>
                <Box bgColor="business_50" padding={10}>
                  <Text mt={8} weight={'bold'}>
                    {navigation.title}
                  </Text>
                </Box>
                <Divider />
              </>
            );
          })}
        </Drawer>
      ) : (
        <>
          <Box ps={20} bgColor="grayscale_700">
            {/* <Box justify="space-around" height={80} width={'100%'} direction="row"> */}
            <BreadCrumb />
            {/* </Box> */}
          </Box>
          {children}
        </>
      )}
    </Box>
  );
};

export default AdminLayout;
