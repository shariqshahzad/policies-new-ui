import { ErrorPage, PrivateRoute } from '@takamol/react-qiwa-core';
import * as React from 'react';
import { Route, createRoutesFromElements } from 'react-router-dom';
import { App } from 'src/App';
import { createBrowserRouterWithSentry } from '../../../integrations/sentry';
import { AuthRoute } from '../../enums/AuthRoute.enum';
import { CoreRoute } from '../../enums/CoreRoute.enum';
import { lazyLoaderRetry } from '../../utils/lazyLoaderRetry';
import { BubbleError } from '../BubbleError';
import { OutletWithPageLoader } from 'src/app/shared/components/OutletWithPageLoader';
import { AdminLayout } from 'src/app/shared/components/AdminLayout';
import ActivityRecordsComponent from 'src/app/Pages/activityRecords';
import CompanyDetails from 'src/app/Pages/companyDetails/CompanyDetails';
import PolicyReviewRequest from 'src/app/Pages/policyReviewRequest/PolicyReviewRequest';
import Settings from 'src/app/Pages/settings';
import AdminUsers from 'src/app/Pages/adminusers';

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
        <Route path={`${AuthRoute.policyReviewRequest}`} element={<PolicyReviewRequest />} />
        <Route path={AuthRoute.companyClerk} element={<CompanyClerks />} />
        <Route path={AuthRoute.lawofficeinfos} element={<LawOfficeInfos />} />
        <Route path={AuthRoute.contactInformation} element={<MLSDContactInformation />} />
        <Route path={AuthRoute.activityRecords} element={<ActivityRecordsComponent />} />
        <Route path={AuthRoute.settings} element={<Settings />} />
        <Route path={AuthRoute.adminuser} element={<AdminUsers />} />
        <Route path={AuthRoute.dashboard} element={<Dashboard />} />
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
