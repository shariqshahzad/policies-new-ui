import React from 'react';
import { Box, Breadcrumbs, Text } from '@takamol/qiwa-design-system/components';
import { useLocation } from 'react-router-dom';

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

  return (
    <>
      <Box>
        <Breadcrumbs variant="light">
          <Breadcrumbs.Item href="/">{homeLabel}</Breadcrumbs.Item>
          {urlParts.map((part: any, index: any) => {
            if (part && part !== '/') {
              const isCurrent = index === urlParts.length - 1;
              const href = urlParts.slice(0, index + 1).join('/');
              return (
                <Breadcrumbs.Item key={index} href={href} isCurrent={isCurrent}>
                  {isCurrent ? lastPart : part}
                </Breadcrumbs.Item>
              );
            }
            return null;
          })}
        </Breadcrumbs>

        <Text weight="bold" ps={10} align="start" color="info_50" variant="heading-l">
          {formatLastPart(lastPart)}
        </Text>
      </Box>
    </>
  );
};

export default BreadCrumb;
