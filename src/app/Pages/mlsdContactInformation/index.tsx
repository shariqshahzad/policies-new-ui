import React from 'react';
import DynamicTable from '../../../components/table';
import { Button } from '@takamol/qiwa-design-system/components';

// Define interface for MHRSD Contact Information data
interface MHRSDContactInfo {
  ID: number;
  Phone: string;
  Fax: string;
  Email: string;
}

// Define sample data for MHRSD Contact Information
const mhrsdContactInfo: MHRSDContactInfo[] = [
  { ID: 1, Phone: '0512345678', Fax: '00966585676465', Email: 'mlsdadmin@admin.com' },
];

const MHRSDContactInformationComponent: React.FC = () => {
  const columns: string[] = ['ID', 'Phone', 'Fax', 'Email'];

  const renderActions = (rowData: MHRSDContactInfo) => {
    return (
      <Button variant="business_ghost" size="small" onClick={() => handleView(rowData)}>
        View
      </Button>
    );
  };

  const handleView = (rowData: MHRSDContactInfo) => {
    // Logic to handle view action
    console.log('View clicked for ID:', rowData.ID);
  };

  const handleEdit = (rowData: MHRSDContactInfo) => {
    // Logic to handle edit action
    console.log('Edit clicked for ID:', rowData.ID);
  };

  const variant: string = ''; // Define your variant

  return <DynamicTable columns={columns} data={mhrsdContactInfo} renderActions={renderActions} variant={variant} />;
};

export default MHRSDContactInformationComponent;
