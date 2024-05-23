import React from 'react';
import DynamicTable from '../../../../components/table';
import { Button } from '@takamol/qiwa-design-system/components';
import { PaymentLog } from 'src/interfaces/payments.type';
import { paymentLogs } from 'src/data/Payment.data';

// Define interface for Payment Logs data

// Define sample data for Payment Logs

const PaymentLogs: React.FC = () => {
  const columns: string[] = [
    'ID',
    'Lawyer',
    'Policy Review Request',
    'Request URL',
    'Response Code',
    'Payment ID',
    'Date',
    'Number of Checking Status',
  ];

  const renderActions = (rowData: PaymentLog) => {
    return (
      <Button variant="business_ghost" size="small" onClick={() => handleView(rowData)}>
        View
      </Button>
    );
  };

  const handleView = (rowData: PaymentLog) => {
    console.log('View clicked for Payment Log ID:', rowData.id);
  };

  return (
    <DynamicTable
      columns={columns}
      data={paymentLogs}
      renderActions={renderActions}
      variant="business"
      isPaginationEnabled={true}
    />
  );
};

export default PaymentLogs;
