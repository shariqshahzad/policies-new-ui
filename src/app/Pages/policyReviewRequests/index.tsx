import React from 'react';
import DynamicTable from '../../../components/table';
import { Button } from '@takamol/qiwa-design-system/components';

interface CompanyData {
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

const companyData: CompanyData = {
  id: 25756,
  companyName: 'شركة ابناء قاسم محمد احمد الدريويش',
  companyNumber: '1-693',
  contactPersonName: 'ashraf abdalkader',
  contactPersonCityName: 'الرياض',
  status: 'Accredited by MHRSD',
  policyType: 'Standard Policy',
  lawOfficeCountEmployees: 16,
  reviewer: 'NO',
  unassignedBefore: 'Yes',
  pendingMHRSDAccreditationDate: 'yes',
};

const policyReviewRequests: React.FC = () => {
  const data: CompanyData[] = Array(8)
    .fill(null)
    .map(() => ({
      ...companyData,
    }));

  const columns: string[] = [
    'ID',
    'Company Name',
    'Company Number',
    'Contact Person Name',
    'Contact Person City Name',
    'Status',
    'Policy Type',
    'Law officeCount employees',
    'Reviewer',
    'Unassigned before',
    'Pending MHRSD accreditation date',
  ];

  const renderActions = () => {
    return (
      <Button
        variant="business_ghost"
        onClick={(event) => {
          event?.stopPropagation();
          // onActionClick(event);
        }}
        size="small"
      >
        View
      </Button>
    );
  };

  const variant: string = ''; // Define your variant

  return <DynamicTable columns={columns} data={data} renderActions={renderActions} variant={variant} />;
};

export default policyReviewRequests;
