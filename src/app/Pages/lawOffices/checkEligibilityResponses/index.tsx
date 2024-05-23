import React from 'react';
import DynamicTable from '../../../../components/table';
import { Button } from '@takamol/qiwa-design-system/components';
import { CheckEligibilityResponse } from 'src/interfaces/lawOfficeInfo.type';
import { checkEligibilityResponses } from 'src/data/LawOffices.data';

// Define interface for Check Eligibility Responses data

// Define sample data for Check Eligibility Responses

const CheckEligibilityResponses: React.FC = () => {
  const columns: string[] = ['ID', 'Law Office Name', 'Labor Office', 'Sequence Number', 'Response Code', 'Created At'];

  const renderActions = (rowData: CheckEligibilityResponse) => {
    return (
      <Button variant="business_ghost" size="small" onClick={() => handleView(rowData)}>
        View
      </Button>
    );
  };

  const handleView = (rowData: CheckEligibilityResponse) => {
    // Logic to handle view action
    console.log('View clicked for ID:', rowData.ID);
  };

  return (
    <DynamicTable
      columns={columns}
      data={checkEligibilityResponses}
      renderActions={renderActions}
      isPaginationEnabled={true}
    />
  );
};

export default CheckEligibilityResponses;
