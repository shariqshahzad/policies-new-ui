import React from 'react';
import DynamicTable from '../../../../components/table';
import { Button, ButtonGroup } from '@takamol/qiwa-design-system/components';
import { Lawyer } from 'src/interfaces/lawOfficeInfo.type';
import { lawyers } from 'src/data/LawOffices.data';

// Define interface for Lawyers data

// Define sample data for Lawyers

const Lawyers: React.FC = () => {
  const columns: string[] = ['ID', 'National ID number', 'Law Offices name', 'Name', 'Created at'];

  const renderActions = (rowData: Lawyer) => {
    return (
      <ButtonGroup>
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
    );
  };

  const handleView = (rowData: Lawyer) => {
    // Logic to handle view action
    console.log('View clicked for ID:', rowData.ID);
  };

  const handleEdit = (rowData: Lawyer) => {
    // Logic to handle edit action
    console.log('Edit clicked for ID:', rowData.ID);
  };

  const handleDelete = (rowData: Lawyer) => {
    // Logic to handle delete action
    console.log('Delete clicked for ID:', rowData.ID);
  };

  return <DynamicTable columns={columns} data={lawyers} renderActions={renderActions} isPaginationEnabled={true} />;
};

export default Lawyers;
