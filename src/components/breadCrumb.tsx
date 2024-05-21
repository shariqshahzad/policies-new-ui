import React from 'react';
import { Box, Breadcrumbs, Text } from '@takamol/qiwa-design-system/components';
import { useLocation } from 'react-router-dom';
import { kebabToTitleCase } from 'src/app/routing/utils/helper';

interface BreadCrumbProps {
  homeLabel?: string; // Label for the home breadcrumb
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ homeLabel = 'Home' }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const urlParts: any = currentPath.split('/');
  let lastPart = urlParts[urlParts.length - 1];

  // Check if the current path is "/"
  if (currentPath === '/') {
    lastPart = 'Policies Review Requests';
  }

  const formatLastPart = (part: string) => {
    return part
      .replace(/[_-]/g, ' ')
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  let breadCrumbRoutes = urlParts.reduce((items: any[], part: any, index: any) => {
    if (part && part !== '/') {
      const isCurrent = index === urlParts.length - 1;
      const href = urlParts.slice(0, index + 1).join('/');
      items.push(
        <Breadcrumbs.Item href={href} isCurrent={isCurrent}>
          {kebabToTitleCase(part)}
        </Breadcrumbs.Item>,
      );
    }
    return items;
  }, []);
  breadCrumbRoutes.unshift(
    <Breadcrumbs.Item href="/" isCurrent={breadCrumbRoutes.length == 1}>
      {homeLabel}
    </Breadcrumbs.Item>,
  );

  return (
    <>
      <Box padding={10}>
        {breadCrumbRoutes.length > 1 && <Breadcrumbs variant="light">{breadCrumbRoutes}</Breadcrumbs>}
        <Text pt={2} weight="bold" align="start" color="info_50" variant={'heading-s'}>
          {formatLastPart(lastPart)}
        </Text>
      </Box>
    </>
  );
};

export default BreadCrumb;
