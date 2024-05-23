export interface LawOfficesInfos {
  ID: number;
  LawOfficeID: number;
  Name: string;
  CommercialName: string;
  Phone: string;
  Status: string;
  Availability: string;
  SaudiLawyers: string;
  City: string;
  Blocked: string;
  Eligible: string;
  CreatedAt: string;
}

export interface Lawyer {
  ID: number;
  nationalId: string;
  lawOffice: string;
  name: string;
  createdAt: string;
}

export interface CheckEligibilityResponse {
  ID: number;
  lawOfficeName: string;
  laborOffice: number;
  sequenceNumber: number;
  responseCode: string;
  createdAt: string;
}
