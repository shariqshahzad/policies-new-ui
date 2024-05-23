import React from 'react';
import DynamicTable from '../../../../components/table';
import { Button, ButtonGroup } from '@takamol/qiwa-design-system/components';
import { StandardPolicy } from 'src/interfaces/policy.type';
import { standardPolicies } from 'src/data/policy.data';

// Define interface for Standard Policies data

// Define sample data for Standard Policies

const StandardPolicies: React.FC = () => {
  const columns: string[] = ['ID', 'Number', 'Active', 'Calendar', 'Number of workdays in a week', 'Off days'];

  const renderActions = (rowData: StandardPolicy) => {
    return (
      <>
        <ButtonGroup size="small">
          <Button variant="business_ghost" size="small" onClick={() => handleView(rowData)}>
            View
          </Button>
          <Button variant="business_ghost" size="small" onClick={() => handleEdit(rowData)}>
            Edit
          </Button>
          <Button variant="business_ghost" size="small" onClick={() => handleDelete(rowData)}>
            Delete
          </Button>
        </ButtonGroup>
      </>
    );
  };

  const handleView = (rowData: StandardPolicy) => {
    // Logic to handle view action
    console.log('View clicked for ID:', rowData.ID);
  };

  const handleEdit = (rowData: StandardPolicy) => {
    // Logic to handle edit action
    console.log('Edit clicked for ID:', rowData.ID);
  };

  const handleDelete = (rowData: StandardPolicy) => {
    // Logic to handle delete action
    console.log('Delete clicked for ID:', rowData.ID);
  };

  return (
    <DynamicTable columns={columns} data={standardPolicies} renderActions={renderActions} isPaginationEnabled={true} />
  );
};

export default StandardPolicies;
