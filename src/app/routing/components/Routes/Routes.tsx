import { Box, Breadcrumbs } from '@takamol/qiwa-design-system/components';
import { ErrorPage, PrivateRoute } from '@takamol/react-qiwa-core';
import * as React from 'react';
import { Route, createRoutesFromElements } from 'react-router-dom';

import { App } from 'src/App';
import { LawOfficeLayout } from 'src/app/shared/components/LawOfficeLayout';
import { ProcessLayout } from 'src/app/shared/components/ProcessLayout';
import { PublicBusinessLayout } from 'src/app/shared/components/PublicBusinessLayout';
import { PublicIndividualsLayout } from 'src/app/shared/components/PublicIndividualsLayout';
import { UnifiedPortalLayout } from 'src/app/shared/components/UnifiedPortalLayout';
import { createBrowserRouterWithSentry } from '../../../integrations/sentry';
import { AuthRoute } from '../../enums/AuthRoute.enum';
import { CoreRoute } from '../../enums/CoreRoute.enum';
import { PublicRoute } from '../../enums/PublicRoute.enum';
import { SharableServiceRoute } from '../../enums/SharableServiceRoute';
import { AccountAndNavigationLayout } from 'src/app/shared/components/AccountAndNavigationLayout';
import { lazyLoaderRetry } from '../../utils/lazyLoaderRetry';
import { BubbleError } from '../BubbleError';
import { OutletWithPageLoader } from 'src/app/shared/components/OutletWithPageLoader';
import { AdminLayout } from 'src/app/shared/components/AdminLayout';
import ActivityRecordsComponent from 'src/app/Pages/activityRecords';
import { Layout } from 'src/app/shared/components/Layout';
import Breadcrumb from 'src/components/breadCrumb';
import CompanyDetails from 'src/app/Pages/companyDetails/CompanyDetails';

const ExamplePublicDashboard = React.lazy(
  lazyLoaderRetry(
    () =>
      import(
        /* webpackChunkName: "starter-example-public-dashboard" */ 'src/app/examplePublicDashboard/ExamplePublicDashboard'
      ),
  ),
);

const ExampleDashboard = React.lazy(
  lazyLoaderRetry(
    () => import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/exampleDashboard/ExampleDashboard'),
  ),
);

const PublicReviewRequests = React.lazy(
  lazyLoaderRetry(
    () => import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/policyReviewRequests/index'),
  ),
);

const Companies = React.lazy(
  lazyLoaderRetry(() => import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/companies/index')),
);
const CompanyClerks = React.lazy(
  lazyLoaderRetry(
    () => import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/companyClerks/index'),
  ),
);
const LawOfficeInfos = React.lazy(
  lazyLoaderRetry(
    () => import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/LawOfficesInfos/index'),
  ),
);
const MLSDContactInformation = React.lazy(
  lazyLoaderRetry(
    () => import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/mlsdContactInformation/index'),
  ),
);
const AppRouter = createBrowserRouterWithSentry(
  createRoutesFromElements(
    <Route path="/" errorElement={<BubbleError />} element={<App />}>
      <Route
        element={
          <AdminLayout>
            <PrivateRoute>
              <OutletWithPageLoader />
            </PrivateRoute>
          </AdminLayout>
        }
      >
        <Route path={AuthRoute.dashboard} element={<PublicReviewRequests />} />
        <Route path={AuthRoute.companies} element={<Companies />} />
        <Route path={`${AuthRoute.companies}/:companyId`} element={<CompanyDetails />} />
        <Route path={AuthRoute.companyClerk} element={<CompanyClerks />} />
        <Route path={AuthRoute.lawofficeinfos} element={<LawOfficeInfos />} />
        <Route path={AuthRoute.contactInformation} element={<MLSDContactInformation />} />
        <Route path={AuthRoute.activityRecords} element={<ActivityRecordsComponent />} />

        <Route
          path={AuthRoute.example}
          element={
            <Box pt={24} pb={16} gap={16} direction="row" align="center">
              <p>Example page</p>
            </Box>
          }
        />
      </Route>

      <Route
        element={
          <Layout>
            <OutletWithPageLoader />
          </Layout>
        }
      >
        <Route path={PublicRoute.examplePublic} element={<ExamplePublicDashboard />} />
      </Route>

      <Route
        element={
          <UnifiedPortalLayout>
            <OutletWithPageLoader />
          </UnifiedPortalLayout>
        }
      >
        <Route path={SharableServiceRoute.unifiedPortal} element={<ExamplePublicDashboard />} />
      </Route>

      <Route
        element={
          <PublicIndividualsLayout>
            <OutletWithPageLoader />
          </PublicIndividualsLayout>
        }
      >
        <Route path={PublicRoute.exampleIndividualPublic} element={<ExamplePublicDashboard />} />
      </Route>

      <Route
        element={
          <ProcessLayout>
            <OutletWithPageLoader />
          </ProcessLayout>
        }
      >
        <Route path={AuthRoute.exampleProcess} element={<ExampleDashboard />} />
      </Route>

      <Route
        element={
          <LawOfficeLayout>
            <OutletWithPageLoader />
          </LawOfficeLayout>
        }
      >
        <Route path={AuthRoute.exampleLawOffice} element={<ExampleDashboard />} />
      </Route>

      <Route
        element={
          <LawOfficeLayout>
            <OutletWithPageLoader />
          </LawOfficeLayout>
        }
      >
        <Route path={AuthRoute.exampleLawOfficeHome} element={<ExampleDashboard />} />
      </Route>

      <Route
        element={
          <LawOfficeLayout>
            <OutletWithPageLoader />
          </LawOfficeLayout>
        }
      >
        <Route path={AuthRoute.exampleLawOfficeWorkPolicies} element={<ExampleDashboard />} />
      </Route>

      <Route
        element={
          <AccountAndNavigationLayout>
            <OutletWithPageLoader />
          </AccountAndNavigationLayout>
        }
      >
        <Route path={AuthRoute.exampleAccounWithNavigation} element={<ExampleDashboard />} />
      </Route>

      {/* Error handling routes */}
      <Route path={CoreRoute.error} element={<ErrorPage errorType="error" />} />
      <Route path={CoreRoute.badGateway} element={<ErrorPage errorType="bad-gateway" />} />
      <Route path={CoreRoute.unavailable} element={<ErrorPage errorType="unavailable" />} />
      <Route path={CoreRoute.notVerified} element={<ErrorPage errorType="not-verified" />} />
      <Route path={CoreRoute.sessionExpiry} element={<ErrorPage errorType="session-expiry" />} />
      <Route path={CoreRoute.gatewayTimeout} element={<ErrorPage errorType="gateway-timeout" />} />
      <Route path={CoreRoute.unauthorized} element={<ErrorPage errorType="unauthorized" />} />
      <Route path="*" element={<ErrorPage errorType="not-found" />} />
    </Route>,
  ),
);

export default AppRouter;
