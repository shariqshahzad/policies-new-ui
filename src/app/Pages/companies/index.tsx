import React from 'react';
import DynamicTable from '../../../components/TableLayout/table';
import { Button } from '@takamol/qiwa-design-system/components';
import { Company } from '../../../interfaces/company.type';
import { companies } from '../../../data/company.data';

const CompanyComponent: React.FC = () => {
  const columns: string[] = ['ID', 'Name', 'Company Number', 'City', 'Blocked'];

  const renderActions = () => {
    return (
      <Button variant="business_ghost" size="small">
        View
      </Button>
    );
  };

  const variant: string = ''; // Define your variant

  return <DynamicTable columns={columns} data={companies} renderActions={renderActions} variant={variant} />;
};

export default CompanyComponent;
