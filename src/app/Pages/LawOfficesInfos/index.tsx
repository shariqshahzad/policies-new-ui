import React from 'react';
import DynamicTable from '../../../components/TableLayout/table';
import { Button } from '@takamol/qiwa-design-system/components';
import { lawOfficesInfos } from 'src/data/LawOffices.data';

const LawOfficesInfosComponent: React.FC = () => {
  const columns: string[] = [
    'ID',
    'Law Office ID',
    'Name',
    'Commercial Name',
    'Phone',
    'Status',
    'Availability',
    'Saudi Lawyers',
    'City',
    'Blocked',
    'Eligible',
    'Created at',
  ];

  const renderActions = () => {
    return (
      <Button variant="business_ghost" size="small">
        View
      </Button>
    );
  };

  const variant: string = ''; // Define your variant

  return <DynamicTable columns={columns} data={lawOfficesInfos} renderActions={renderActions} variant={variant} />;
};

export default LawOfficesInfosComponent;
