import React from 'react';
import { Box, Link, LinkGroup, Text } from '@takamol/qiwa-design-system/components';
import { LinkArrow } from '@takamol/qiwa-design-system/icons';
import { Link as RouterLink } from 'react-router-dom';

import { AuthRoute } from 'src/app/routing/enums/AuthRoute.enum';
import { PublicRoute } from 'src/app/routing/enums/PublicRoute.enum';
import { SharableServiceRoute } from 'src/app/routing/enums/SharableServiceRoute';
import { CoreRoute } from 'src/app/routing/enums/CoreRoute.enum';

export const TableOfContents = () => {
  return (
    <Box pt={24} pb={16} gap={16}>
      <Text variant="heading-xs" weight="semibold">
        Layout pages
      </Text>
      <LinkGroup iconComponent={LinkArrow} iconPlacement="start">
        <Link to={AuthRoute.dashboard} component={RouterLink}>
          Example dashboard page
        </Link>
        <Link to={AuthRoute.example} component={RouterLink}>
          Example page
        </Link>
        <Link to={PublicRoute.examplePublic} component={RouterLink}>
          Example public page
        </Link>
        <Link to={SharableServiceRoute.unifiedPortal} component={RouterLink}>
          Unified portal page
        </Link>
        <Link to={PublicRoute.exampleIndividualPublic} component={RouterLink}>
          Example individual public page
        </Link>
        <Link to={AuthRoute.exampleProcess} component={RouterLink}>
          Example process page
        </Link>
        <Link to={AuthRoute.exampleLawOffice} component={RouterLink}>
          Example law office page
        </Link>
        <Link to={AuthRoute.exampleLawOfficeHome} component={RouterLink}>
          Example law office home page
        </Link>
        <Link to={AuthRoute.exampleLawOfficeWorkPolicies} component={RouterLink}>
          Example law office work policies page
        </Link>
        <Link to={AuthRoute.exampleAccounWithNavigation} component={RouterLink}>
          Example account with navigation page
        </Link>
      </LinkGroup>
      <Text variant="heading-xs" weight="semibold">
        Error pages
      </Text>
      <LinkGroup iconComponent={LinkArrow} iconPlacement="start">
        <Link to={CoreRoute.error} component={RouterLink}>
          Error page
        </Link>
        <Link to={CoreRoute.badGateway} component={RouterLink}>
          Bad gateway page
        </Link>
        <Link to={CoreRoute.unavailable} component={RouterLink}>
          Unavailable page
        </Link>
        <Link to={CoreRoute.notVerified} component={RouterLink}>
          Not verified page
        </Link>
        <Link to={CoreRoute.sessionExpiry} component={RouterLink}>
          Session expired page
        </Link>
        <Link to={CoreRoute.gatewayTimeout} component={RouterLink}>
          Gateway timeout page
        </Link>
        <Link to={CoreRoute.unauthorized} component={RouterLink}>
          Unauthorized page
        </Link>
        <Link to="/not-found" component={RouterLink}>
          Not found page
        </Link>
      </LinkGroup>
    </Box>
  );
};
