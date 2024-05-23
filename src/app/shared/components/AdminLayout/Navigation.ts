import { paymentStatusLogs } from 'src/data/Payment.data';
import { AuthRoute } from 'src/app/routing/enums/AuthRoute.enum';

export const navigations = [
  {
    title: 'Dashboard',
    link: AuthRoute.dashboard,
  },
  {
    title: 'Policies',
    subMenu: [
      {
        title: 'Standard Policies',
        link: AuthRoute.standardPolicies,
      },
      {
        title: 'Policy Review Requests   ',
        link: AuthRoute.policyReviewRequest,
      },
      {
        title: 'Old Policies',
        link: AuthRoute.oldPolicies,
      },
    ],
  },
  {
    title: 'Companies',
    subMenu: [
      {
        title: 'Companies',
        link: AuthRoute.companies,
      },
      {
        title: 'Company Clerks',
        link: AuthRoute.companyClerk,
      },
    ],
  },
  {
    title: 'Law Offices',
    subMenu: [
      {
        title: 'Lawyers',
        link: AuthRoute.Lawyers,
      },
      {
        title: 'Law Office Infos',
        link: AuthRoute.lawofficeinfos,
      },
      {
        title: 'Check Eligibility Responses',
        link: AuthRoute.checkEligibilityResponse,
      },
    ],
  },
  {
    title: 'Cities',
    link: AuthRoute.cities,
  },
  {
    title: 'Admin Users',
    link: AuthRoute.adminuser,
  },
  {
    title: 'Company Status',
    link: AuthRoute.companies,
  },
  {
    title: 'Payments',
    subMenu: [
      {
        title: 'Invoices',
        link: AuthRoute.invoices,
      },
      {
        title: 'Payment Logs',
        link: AuthRoute.paymentLogs,
      },
      {
        title: 'Payment Status Logs',
        link: AuthRoute.paymentStatusLogs,
      },
      {
        title: 'Unified Invoices Logs',
        link: AuthRoute.unifiedinvoicelogs,
      },
    ],
  },
  {
    title: 'MHRSD',
    link: AuthRoute.contactInformation,
  },

  {
    title: 'Settings',
    link: AuthRoute.settings,
  },
  {
    title: 'Activity Records',
    link: AuthRoute.activityRecords,
  },
  {
    title: 'Statistics',
    link: AuthRoute.statistics,
  },
];
