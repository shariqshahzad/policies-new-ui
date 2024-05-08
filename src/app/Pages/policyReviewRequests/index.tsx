import React from 'react';
import DynamicTable from '../../../components/table';
import { Button } from '@takamol/qiwa-design-system/components';
import { Policy } from 'src/interfaces/policy.type';
import { policyData } from 'src/data/policy.data';

const policyReviewRequests: React.FC = () => {
  const data: Policy[] = Array(8)
    .fill(null)
    .map(() => ({
      ...policyData,
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
