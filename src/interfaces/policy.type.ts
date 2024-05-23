export interface Policy {
  id: number;
  companyName: string;
  companyNumber: string;
  contactPersonName: string;
  contactPersonCityName: string;
  status: string;
  policyType: string;
  lawOfficeCountEmployees: number;
  reviewer: string;
  unassignedBefore: string;
  pendingMHRSDAccreditationDate: string;
}

export interface StandardPolicy {
  ID: number;
  number: string;
  active: string;
  Calendar: string;
  'Number of workdays in a week': number;
  OffDays?: string;
}

export interface OldPolicy {
  ID: number;
  DataFile: string;
  AdminUser: string;
  Status: string;
  CreatedAt: string;
}
