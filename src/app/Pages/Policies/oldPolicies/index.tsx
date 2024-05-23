import React from 'react';
import DynamicTable from '../../../../components/table';
import { Button } from '@takamol/qiwa-design-system/components';
import { OldPolicy } from 'src/interfaces/policy.type';
import { oldPolicies } from 'src/data/policy.data';

// Define interface for Old Policies data

// Define sample data for Old Policies

const OldPolicies: React.FC = () => {
  const columns: string[] = ['ID', 'Data File', 'Admin user', 'Status', 'Created at'];

  const renderActions = (rowData: OldPolicy) => {
    return (
      <Button variant="business_ghost" size="small" onClick={() => handleView(rowData)}>
        View
      </Button>
    );
  };

  const handleView = (rowData: OldPolicy) => {
    // Logic to handle view action
    console.log('View clicked for ID:', rowData.ID);
  };

  return <DynamicTable columns={columns} data={oldPolicies} renderActions={renderActions} isPaginationEnabled={true} />;
};

export default OldPolicies;
