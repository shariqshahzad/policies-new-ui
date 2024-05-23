import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';

const InvoiceDetails = () => {
  const details = [
    { label: "LAW OFFICE", value: "مفروشات السلطان" },
    { label: "COMPANY", value: "شركة نسما اونور للمقاولات المحدودة" },
    { label: "UNIT PRICE", value: "2750.0" },
    { label: "VAT", value: "15.0%" },
    { label: "TOTAL PRICE", value: "3162.5" }
  ];
  return (
    <Box width={'auto'}>
      <DetailsCard title='Invoice Details' details={details}></DetailsCard>
    </Box>
  );
};

export default InvoiceDetails;
