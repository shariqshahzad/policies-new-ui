import React from 'react';
import DynamicTable from '../../../components/table';
import { Button } from '@takamol/qiwa-design-system/components';
import { AuthRoute } from 'src/app/routing/enums/AuthRoute.enum';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const columns: string[] = ['ID', 'Phone', 'Fax', 'Email'];

  const renderActions = (isMobileWidth: boolean, variant: string, rowData: MHRSDContactInfo) => {
    return (
      <Button variant="business_ghost" size="small" onClick={() => handleView(rowData)}>
        View
      </Button>
    );
  };

  const handleView = (rowData: MHRSDContactInfo) => {
    // Logic to handle view action
    navigate(`${AuthRoute.contactInformation}/contactInformationId`)
  };

  const handleEdit = (rowData: MHRSDContactInfo) => {
    // Logic to handle edit action
    console.log('Edit clicked for ID:', rowData.ID);
  };

  const variant: string = ''; // Define your variant

  return <DynamicTable columns={columns} data={mhrsdContactInfo} renderActions={renderActions} variant={variant} />;
};

export default MHRSDContactInformationComponent;
