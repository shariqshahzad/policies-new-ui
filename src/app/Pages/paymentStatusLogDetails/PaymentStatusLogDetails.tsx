import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';

const PaymentStatusLogDetails = () => {
  const data = [
    { label: 'REQUEST METHOD', value: 'get' },
    {
      label: 'REQUEST URL',
      value: 'https://internal-dynamic-gateway-api.qiwa.info/api/dynamic-gateway/v1/transaction/23446',
    },
    {
      label: 'RESPONSE',
      value:
        '{"id":23446,"price":3162.5,"descriptionEn":"policies_payment","descriptionAr":"policies_payment","lang":"EN","callbackUrl":"https://work-policy-api.qiwa.info/api/v1/policy_review_requests/25639/payment_callback","applicationName":"laborer-policies","currency":"SAR","paymentReference":"QW-POL-HP-24-FECB6472E-000000000055232","productId":10,"status":"SUCCESS","idNumber":1007132408,"laborOfficeId":25,"sequenceNumber":14015,"unifiedNumber":881916,"type":"CARD","paymentId":15791,"createdAt":"2024-05-02T07:49:44.033Z","updatedAt":"2024-05-02T07:50:13.216610273Z","details":{"type":"CARD","lastDigits":"0008","cardExpiryYear":"2039","cardExpiryMonth":"01","createdAt":"2024-05-02T07:49:58.287329500Z"},"availablePayments":["CARD","SADAD","QWALLET_DEFAULT"],"availablePayers":[1007132408]}',
    },
    { label: 'RESPONSE CODE', value: "200" },
    { label: 'EXCEPTION', value: 'No exception data available.' },
    { label: 'PAYMENT ID', value: "23446" },
    { label: 'CREATED AT', value: 'May 02, 2024 10:50' },
    { label: 'UPDATED AT', value: 'May 02, 2024 10:50' },
  ];
  return (
    <Box width={'auto'}>
      <DetailsCard title="Payment Status Log Details" details={data}></DetailsCard>
    </Box>
  );
};

export default PaymentStatusLogDetails;
