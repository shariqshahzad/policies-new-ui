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
import CompanyEdit from 'src/app/Pages/companyEdit/CompanyEdit';
import CompanyClerkDetails from 'src/app/Pages/company-clerk-details/CompanyClerkDetails';
import LawOfficeInfoDetails from 'src/app/Pages/lawOfficeInfoDetail/LawOfficeInfoDetails';
import MLSDContactInformationDetails from 'src/app/Pages/mlsdContactInformationDetails/MLSDContactInformationDetails';
import StandardPolicyDetails from 'src/app/Pages/standardPolicyDetails/StandardPolicyDetails';
import OldPolicyDetails from 'src/app/Pages/oldPolicyDetails/OldPolicyDetails';
import LawyerDetails from 'src/app/Pages/lawyerDetails/LawyerDetails';
import CheckEligibilityResponseDetails from 'src/app/Pages/checkEligibilityResponseDetails/CheckEligibilityResponseDetails';
import CityDetails from 'src/app/Pages/cityDetails/CityDetails';
import AdminUserDetails from 'src/app/Pages/adminUserDetails/AdminUserDetails';
import InvoiceDetails from 'src/app/Pages/invoiceDetails/InvoiceDetails';
import PaymentStatusLogDetails from 'src/app/Pages/paymentStatusLogDetails/PaymentStatusLogDetails';
import SettingDetails from 'src/app/Pages/settingDetails/SettingDetails';
import PolicyReviewRequestDetails from 'src/app/Pages/policyReviewRequestDetails/PolicyReviewRequestDetails';

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
        /* webpackChunkName: "starter-example-dashboard" */ 'src/app/Pages/policyReviewRequestDetails/PolicyReviewRequestDetails'
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
        <Route path={AuthRoute.companyClerk} element={<CompanyClerks />} />
        <Route path={AuthRoute.lawofficeinfos} element={<LawOfficeInfos />} />
        <Route path={AuthRoute.checkEligibilityResponse} element={<CheckEligibilityResponses />} />
        <Route path={AuthRoute.contactInformation} element={<MLSDContactInformation />} />
        <Route path={AuthRoute.cities} element={<Cities />} />
        <Route path={AuthRoute.invoices} element={<Invoices />} />
        <Route path={AuthRoute.paymentLogs} element={<PaymentLogs />} />
        <Route path={AuthRoute.paymentStatusLogs} element={<PaymentStatusLogs />} />
        <Route path={AuthRoute.unifiedinvoicelogs} element={<PaymentStatusLogs />} />


        <Route path={AuthRoute.policyReviewRequestDetail} element={<PolicyReviewRequestDetails />} />
        <Route path={AuthRoute.activityRecords} element={<ActivityRecordsComponent />} />
        <Route path={AuthRoute.settings} element={<Settings />} />
        <Route path={AuthRoute.adminuser} element={<AdminUsers />} />
        <Route path={AuthRoute.dashboard} element={<Dashboard />} />
        <Route path={AuthRoute.editCompany} element={<CompanyEdit />} />
        <Route path={AuthRoute.companyClerkDetails} element={<CompanyClerkDetails />} />
        <Route path={AuthRoute.lawOfficeInfoDetails} element={<LawOfficeInfoDetails />} />
        <Route path={`${AuthRoute.contactInformation}/:contactInformationId`} element={<MLSDContactInformationDetails />} />
        <Route path={AuthRoute.standardPolicyDetail} element={<StandardPolicyDetails />} />
        <Route path={AuthRoute.oldPolicyDetails} element={<OldPolicyDetails />} />
        <Route path={AuthRoute.lawyerDetails} element={<LawyerDetails />} />
        <Route path={AuthRoute.checkEligibilityResponseDetails} element={<CheckEligibilityResponseDetails />} />
        <Route path={AuthRoute.cityDetails} element={<CityDetails />} />
        <Route path={AuthRoute.adminUserDetails} element={<AdminUserDetails />} />
        <Route path={AuthRoute.invoiceDetails} element={<InvoiceDetails />} />
        <Route path={AuthRoute.paymentStatusLogDetails} element={<PaymentStatusLogDetails />} />
        <Route path={AuthRoute.settingDetails} element={<SettingDetails />} />
        
        
        
        
        
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
