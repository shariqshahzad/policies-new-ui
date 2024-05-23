import React from 'react';
import DynamicTable from '../../../../components/table';
import { Button } from '@takamol/qiwa-design-system/components';
import { PaymentStatusLog } from 'src/interfaces/payments.type';
import { paymentStatusLogs } from 'src/data/Payment.data';

// Define interface for Payment Status Logs data

// Define sample data for Payment Status Logs

const PaymentStatusLogs: React.FC = () => {
  const columns: string[] = [
    'ID',
    'Lawyer',
    'Policy Review Request',
    'Request URL',
    'Response Code',
    'Payment ID',
    'Status',
    'Date',
  ];

  const renderActions = (rowData: PaymentStatusLog) => {
    return (
      <Button variant="business_ghost" size="small" onClick={() => handleView(rowData)}>
        View
      </Button>
    );
  };

  const handleView = (rowData: PaymentStatusLog) => {
    // Logic to handle view action
    console.log('View clicked for ID:', rowData.id);
  };

  return (
    <DynamicTable columns={columns} data={paymentStatusLogs} renderActions={renderActions} isPaginationEnabled={true} />
  );
};

export default PaymentStatusLogs;
