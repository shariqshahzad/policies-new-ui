import React from 'react';
import DynamicTable from '../../../components/table';
import { Button } from '@takamol/qiwa-design-system/components';
import { companyClerksData } from '../../../data/companyClerk.data';

const CompanyClerks: React.FC = () => {
  const columns: string[] = ['ID', 'National ID number', 'Name', 'Companies', 'Created at'];

  const renderActions = () => {
    return (
      <Button variant="business_ghost" size="small">
        View
      </Button>
    );
  };

  const variant: string = ''; // Define your variant

  return <DynamicTable columns={columns} data={companyClerksData} renderActions={renderActions} variant={variant} />;
};

export default CompanyClerks;
