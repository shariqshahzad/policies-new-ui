import React from 'react';
import DynamicTable from '../../../../components/table';
import { Button } from '@takamol/qiwa-design-system/components';
import { PaymentLog } from 'src/interfaces/payments.type';
import { paymentLogs } from 'src/data/Payment.data';
import { AuthRoute } from 'src/app/routing/enums/AuthRoute.enum';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    return (
      <Button variant="business_ghost" size="small" onClick={() => navigate(`${AuthRoute.paymentLogs}/1`)}>
        View
      </Button>
    );
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
