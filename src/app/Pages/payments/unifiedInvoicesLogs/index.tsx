import React from 'react';
import DynamicTable from '../../../../components/table';
import { Button } from '@takamol/qiwa-design-system/components';
import { UnifiedInvoiceLog } from 'src/interfaces/payments.type';
import { unifiedInvoiceLogs } from 'src/data/Payment.data';

const UnifiedInvoiceLogs: React.FC = () => {
  const columns: string[] = ['ID', 'Policy Review Request', 'Request URL', 'Response Code', 'Date'];

  const renderActions = (rowData: UnifiedInvoiceLog) => {
    return (
      <Button variant="business_ghost" size="small" onClick={() => handleView(rowData)}>
        View
      </Button>
    );
  };

  const handleView = (rowData: UnifiedInvoiceLog) => {
    // Logic to handle view action
    console.log('View clicked for ID:', rowData.id);
  };

  return (
    <DynamicTable
      columns={columns}
      data={unifiedInvoiceLogs}
      renderActions={renderActions}
      isPaginationEnabled={true}
    />
  );
};

export default UnifiedInvoiceLogs;
