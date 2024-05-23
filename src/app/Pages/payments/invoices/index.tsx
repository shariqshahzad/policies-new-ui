import React from 'react';
import DynamicTable from '../../../../components/table';
import { Button } from '@takamol/qiwa-design-system/components';
import { Invoice } from '../../../../interfaces/payments.type';
import { invoices } from 'src/data/Payment.data';

// Define interface for Invoices data

// Define sample data for Invoices

const Invoices: React.FC = () => {
  const columns: string[] = ['Law Office', 'Company', 'Total Price'];

  const renderActions = (rowData: Invoice) => {
    return (
      <Button variant="business_ghost" size="small" onClick={() => handleView(rowData)}>
        View
      </Button>
    );
  };

  const handleView = (rowData: Invoice) => {
    console.log('View clicked for Invoice:', rowData);
  };

  return (
    <DynamicTable
      columns={columns}
      data={invoices}
      renderActions={renderActions}
      variant="business"
      isPaginationEnabled={true}
    />
  );
};

export default Invoices;
