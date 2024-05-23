export interface Invoice {
  lawOffice: string;
  company: string;
  totalPrice: number;
}

export interface PaymentLog {
  id: number;
  lawyer: string;
  policyReviewRequest: string;
  requestUrl: string;
  responseCode: number;
  paymentId: number;
  date: string;
  numberOfCheckingStatus: number;
}

export interface PaymentStatusLog {
  id: number;
  lawyer: string;
  policyReviewRequest: string;
  requestUrl: string;
  responseCode: number;
  paymentId: number;
  status: string;
  date: string;
}

export interface UnifiedInvoiceLog {
  id: number;
  policyReviewRequest: string;
  requestUrl: string;
  responseCode: number;
  date: string;
}
