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
import StandardPolicies from 'src/app/Pages/Policies/standardPolicies';
import OldPolicies from 'src/app/Pages/Policies/oldPolicies';
import Lawyers from 'src/app/Pages/lawOffices/Lawyers';
import CheckEligibilityResponses from 'src/app/Pages/lawOffices/checkEligibilityResponses';
import Cities from 'src/app/Pages/cities';
import Invoices from 'src/app/Pages/payments/invoices';
import PaymentLogs from 'src/app/Pages/payments/paymentLogs';
import PaymentStatusLogs from 'src/app/Pages/payments/paymentStatusLogs';

const PublicReviewRequests = React.lazy(
  lazyLoaderRetry(
    () =>
      import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/Policies/policyReviewRequests/index'),
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
    () => import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/lawOffices/lawOfficesInfos/index'),
  ),
);
const MLSDContactInformation = React.lazy(
  lazyLoaderRetry(
    () => import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/mlsdContactInformation/index'),
  ),
);

const ActivityRecordsComponent = React.lazy(
  lazyLoaderRetry(() => import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/activityRecords')),
);

const CompanyDetails = React.lazy(
  lazyLoaderRetry(
    () => import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/companyDetails/CompanyDetails'),
  ),
);

const PolicyReviewRequest = React.lazy(
  lazyLoaderRetry(
    () =>
      import(
        /* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/policyReviewRequest/PolicyReviewRequest'
      ),
  ),
);

const Settings = React.lazy(
  lazyLoaderRetry(() => import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/settings')),
);

const AdminUsers = React.lazy(
  lazyLoaderRetry(() => import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/adminusers')),
);

const Dashboard = React.lazy(
  lazyLoaderRetry(() => import(/* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/Dashboard')),
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
        <Route path={AuthRoute.dashboard} element={<Dashboard />} />
        <Route path={AuthRoute.policyReviewRequest} element={<PublicReviewRequests />} />
        <Route path={AuthRoute.companies} element={<Companies />} />
        <Route path={AuthRoute.companyClerk} element={<CompanyClerks />} />
        <Route path={`${AuthRoute.companies}/:companyId`} element={<CompanyDetails />} />
        <Route path={`${AuthRoute.policyReviewRequest}`} element={<PolicyReviewRequest />} />
        <Route path={`${AuthRoute.standardPolicies}`} element={<StandardPolicies />} />
        <Route path={`${AuthRoute.oldPolicies}`} element={<OldPolicies />} />
        <Route path={AuthRoute.Lawyers} element={<Lawyers />} />
        <Route path={AuthRoute.lawofficeinfos} element={<LawOfficeInfos />} />
        <Route path={AuthRoute.checkEligibilityResponse} element={<CheckEligibilityResponses />} />
        <Route path={AuthRoute.contactInformation} element={<MLSDContactInformation />} />
        <Route path={AuthRoute.cities} element={<Cities />} />
        <Route path={AuthRoute.invoices} element={<Invoices />} />
        <Route path={AuthRoute.paymentLogs} element={<PaymentLogs />} />
        <Route path={AuthRoute.paymentStatusLogs} element={<PaymentStatusLogs />} />
        <Route path={AuthRoute.unifiedinvoicelogs} element={<PaymentStatusLogs />} />

        <Route path={AuthRoute.activityRecords} element={<ActivityRecordsComponent />} />
        <Route path={AuthRoute.settings} element={<Settings />} />
        <Route path={AuthRoute.adminuser} element={<AdminUsers />} />
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
