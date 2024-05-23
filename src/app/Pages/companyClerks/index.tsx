import React from 'react';
import DynamicTable from '../../../components/table';
import { Button } from '@takamol/qiwa-design-system/components';
import { companyClerksData } from '../../../data/companyClerk.data';
import { useNavigate } from 'react-router-dom';

const CompanyClerks: React.FC = () => {
  const columns: string[] = ['ID', 'National ID number', 'Name', 'Companies', 'Created at'];
  const navigate = useNavigate();
  const renderActions = () => {
    return (
      <Button variant="business_ghost" size="small" onClick={()=>navigate('/company-clerks/clerk-id')}>
        View
      </Button>
    );
  };

  const variant: string = ''; // Define your variant

  return <DynamicTable columns={columns} data={companyClerksData} renderActions={renderActions} variant={variant} />;
};

export default CompanyClerks;
