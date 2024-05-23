import { Invoice, PaymentLog, PaymentStatusLog, UnifiedInvoiceLog } from 'src/interfaces/payments.type';

export const invoices: Invoice[] = [
  { lawOffice: 'مفروشات السلطان', company: 'شركة نسما اونور للمقاولات المحدودة', totalPrice: 3162.5 },
  { lawOffice: 'مفروشات السلطان', company: 'شركة نسما اونور للمقاولات المحدودة', totalPrice: 3162.5 },
  { lawOffice: 'مفروشات السلطان', company: 'فرع مؤسسة طيف الكون للتجارة', totalPrice: 3162.5 },
  { lawOffice: 'مفروشات السلطان', company: 'حلاق عبدالعزيز مجر المرشدي للحلاقة', totalPrice: 3162.5 },
  { lawOffice: 'مفروشات السلطان', company: 'فرع شركة الاجير المنتدب للاستقدام', totalPrice: 3162.5 },
  {
    lawOffice: 'مجموعة نايف الشبيبي لصاحبها نايف فؤاد عامر الشبيبي',
    company: 'مجموعة نايف الشبيبي لصاحبها نايف فؤاد عامر الشبيبي',
    totalPrice: 3162.5,
  },
  {
    lawOffice: 'مجموعة نايف الشبيبي لصاحبها نايف فؤاد عامر الشبيبي',
    company: 'شركة ابناء نهار جازي الرحيلي لتاجير السيارات',
    totalPrice: 3162.5,
  },
  { lawOffice: 'شركة الاجير المنتدب للاستقدام', company: 'شركة ابناء نهار جازي الرحيلي للتجارة', totalPrice: 3162.5 },
  { lawOffice: 'شركة الاجير المنتدب للاستقدام', company: 'شركة ابناء نهار جازي الرحيلي للتجارة', totalPrice: 3162.5 },
  { lawOffice: 'شركة الاجير المنتدب للاستقدام', company: 'ورشة الرحيلي', totalPrice: 3162.5 },
];

export const paymentLogs: PaymentLog[] = [
  {
    id: 387859,
    lawyer: 'نائف الشبيبي',
    policyReviewRequest: 'Policy Review Request #25639',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/create',
    responseCode: 200,
    paymentId: 23446,
    date: 'May 02, 2024 10:49',
    numberOfCheckingStatus: 1,
  },
  {
    id: 387857,
    lawyer: 'نائف الشبيبي',
    policyReviewRequest: 'Policy Review Request #25639',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/create',
    responseCode: 200,
    paymentId: 23445,
    date: 'May 02, 2024 10:43',
    numberOfCheckingStatus: 1,
  },
  {
    id: 387855,
    lawyer: 'نائف الشبيبي',
    policyReviewRequest: 'Policy Review Request #25638',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/create',
    responseCode: 200,
    paymentId: 23325,
    date: 'May 01, 2024 11:12',
    numberOfCheckingStatus: 1,
  },
  {
    id: 377855,
    lawyer: 'نائف الشبيبي',
    policyReviewRequest: 'Policy Review Request #15640',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/create',
    responseCode: 200,
    paymentId: 23284,
    date: 'April 30, 2024 11:35',
    numberOfCheckingStatus: 1,
  },
  {
    id: 377853,
    lawyer: 'نائف الشبيبي',
    policyReviewRequest: 'Policy Review Request #15637',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/create',
    responseCode: 200,
    paymentId: 23238,
    date: 'April 29, 2024 11:55',
    numberOfCheckingStatus: 1,
  },
  {
    id: 377852,
    lawyer: '1001259736',
    policyReviewRequest: 'Policy Review Request #15617',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/create',
    responseCode: 200,
    paymentId: 22952,
    date: 'April 23, 2024 13:13',
    numberOfCheckingStatus: 0,
  },
  {
    id: 377851,
    lawyer: '1001259736',
    policyReviewRequest: 'Policy Review Request #1287',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/create',
    responseCode: 200,
    paymentId: 22949,
    date: 'April 23, 2024 12:59',
    numberOfCheckingStatus: 0,
  },
  {
    id: 377850,
    lawyer: '1001259736',
    policyReviewRequest: 'Policy Review Request #15616',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/create',
    responseCode: 200,
    paymentId: 22948,
    date: 'April 23, 2024 12:58',
    numberOfCheckingStatus: 0,
  },
  {
    id: 377849,
    lawyer: '1001259736',
    policyReviewRequest: 'Policy Review Request #15616',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/create',
    responseCode: 200,
    paymentId: 22947,
    date: 'April 23, 2024 12:57',
    numberOfCheckingStatus: 0,
  },
  {
    id: 377848,
    lawyer: '1001259736',
    policyReviewRequest: 'Policy Review Request #15616',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/create',
    responseCode: 200,
    paymentId: 22946,
    date: 'April 23, 2024 12:56',
    numberOfCheckingStatus: 0,
  },
];

export const paymentStatusLogs: PaymentStatusLog[] = [
  {
    id: 387860,
    lawyer: 'نائف الشبيبي',
    policyReviewRequest: 'Policy Review Request #25639',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/23446',
    responseCode: 200,
    paymentId: 23446,
    status: 'SUCCESS',
    date: 'May 02, 2024 10:50',
  },
  {
    id: 387858,
    lawyer: 'نائف الشبيبي',
    policyReviewRequest: 'Policy Review Request #25639',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/23445',
    responseCode: 200,
    paymentId: 23445,
    status: 'EXPIRED',
    date: 'May 02, 2024 10:49',
  },
  {
    id: 387856,
    lawyer: 'نائف الشبيبي',
    policyReviewRequest: 'Policy Review Request #25638',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/23325',
    responseCode: 200,
    paymentId: 23325,
    status: 'SUCCESS',
    date: 'May 01, 2024 11:14',
  },
  {
    id: 377856,
    lawyer: 'نائف الشبيبي',
    policyReviewRequest: 'Policy Review Request #15640',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/23284',
    responseCode: 200,
    paymentId: 23284,
    status: 'SUCCESS',
    date: 'April 30, 2024 11:36',
  },
  {
    id: 377854,
    lawyer: 'نائف الشبيبي',
    policyReviewRequest: 'Policy Review Request #15637',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/23238',
    responseCode: 200,
    paymentId: 23238,
    status: 'SUCCESS',
    date: 'April 29, 2024 11:56',
  },
  {
    id: 377842,
    lawyer: 'نائف الشبيبي',
    policyReviewRequest: 'Policy Review Request #15610',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/22855',
    responseCode: 200,
    paymentId: 22855,
    status: 'SUCCESS',
    date: 'April 19, 2024 18:54',
  },
  {
    id: 377838,
    lawyer: 'نائف الشبيبي',
    policyReviewRequest: 'Policy Review Request #15600',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/22776',
    responseCode: 200,
    paymentId: 22776,
    status: 'SUCCESS',
    date: 'April 18, 2024 13:21',
  },
  {
    id: 377835,
    lawyer: 'سلمان العتيبي',
    policyReviewRequest: 'Policy Review Request #15599',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/13229',
    responseCode: 200,
    paymentId: 13229,
    status: 'SUCCESS',
    date: 'April 18, 2024 12:46',
  },
  {
    id: 377834,
    lawyer: 'سلمان العتيبي',
    policyReviewRequest: 'Policy Review Request #15599',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/13229',
    responseCode: 200,
    paymentId: 13229,
    status: 'SUCCESS',
    date: 'April 18, 2024 12:46',
  },
  {
    id: 377833,
    lawyer: 'سلمان العتيبي',
    policyReviewRequest: 'Policy Review Request #15599',
    requestUrl: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/13229',
    responseCode: 200,
    paymentId: 13229,
    status: 'SUCCESS',
    date: 'April 18, 2024 12:46',
  },
];

export const unifiedInvoiceLogs: UnifiedInvoiceLog[] = [
  {
    id: 21592,
    policyReviewRequest: 'Policy Review Request #25639',
    requestUrl: 'https://gw-apic.qiwa.info/takamol/staging/qiwa/v1/invoicesmanagement/policiesreplica',
    responseCode: 400,
    date: 'May 02, 2024 10:50',
  },
  {
    id: 21591,
    policyReviewRequest: 'Policy Review Request #25638',
    requestUrl: 'https://gw-apic.qiwa.info/takamol/staging/qiwa/v1/invoicesmanagement/policiesreplica',
    responseCode: 400,
    date: 'May 01, 2024 11:14',
  },
  {
    id: 11591,
    policyReviewRequest: 'Policy Review Request #15640',
    requestUrl: 'https://gw-apic.qiwa.info/takamol/staging/qiwa/v1/invoicesmanagement/policiesreplica',
    responseCode: 400,
    date: 'April 30, 2024 11:36',
  },
  {
    id: 11590,
    policyReviewRequest: 'Policy Review Request #15637',
    requestUrl: 'https://gw-apic.qiwa.info/takamol/staging/qiwa/v1/invoicesmanagement/policiesreplica',
    responseCode: 400,
    date: 'April 29, 2024 11:56',
  },
  {
    id: 11588,
    policyReviewRequest: 'Policy Review Request #15610',
    requestUrl: 'https://gw-apic.qiwa.info/takamol/staging/qiwa/v1/invoicesmanagement/policiesreplica',
    responseCode: 400,
    date: 'April 19, 2024 18:54',
  },
  {
    id: 11586,
    policyReviewRequest: 'Policy Review Request #15600',
    requestUrl: 'https://gw-apic.qiwa.info/takamol/staging/qiwa/v1/invoicesmanagement/policiesreplica',
    responseCode: 400,
    date: 'April 18, 2024 13:21',
  },
  {
    id: 11585,
    policyReviewRequest: 'Policy Review Request #15599',
    requestUrl: 'https://gw-apic.qiwa.info/takamol/staging/qiwa/v1/invoicesmanagement/policiesreplica',
    responseCode: 200,
    date: 'April 18, 2024 12:46',
  },
  {
    id: 11583,
    policyReviewRequest: 'Policy Review Request #15585',
    requestUrl: 'https://gw-apic.qiwa.info/takamol/staging/qiwa/v1/invoicesmanagement/policiesreplica',
    responseCode: 400,
    date: 'April 17, 2024 14:13',
  },
  {
    id: 11581,
    policyReviewRequest: 'Policy Review Request #15567',
    requestUrl: 'https://gw-apic.qiwa.info/takamol/staging/qiwa/v1/invoicesmanagement/policiesreplica',
    responseCode: 400,
    date: 'April 16, 2024 11:41',
  },
  {
    id: 11579,
    policyReviewRequest: 'Policy Review Request #15282',
    requestUrl: 'https://gw-apic.qiwa.info/takamol/staging/qiwa/v1/invoicesmanagement/policiesreplica',
    responseCode: 200,
    date: 'December 28, 2023 14:45',
  },
];