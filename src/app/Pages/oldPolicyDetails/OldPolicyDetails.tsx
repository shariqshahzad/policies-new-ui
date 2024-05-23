import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';

const OldPolicyDetails = () => {
  const data = [
    { label: "DATA FILE", value: "Company_data__1_.xlsx" },
    { label: "ADMIN USER", value: "أحمد محمد أحمد" },
    { label: "STATUS", value: "Done" },
    { label: "ERRORS", value: "" },
    { label: "CREATED AT", value: "January 12, 2023 13:28" }
  ];
  return (
    <Box width={'auto'}>
      <DetailsCard title="Old Policy Details" details={data}></DetailsCard>
    </Box>
  );
};

export default OldPolicyDetails;
