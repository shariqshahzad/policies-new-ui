import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';

const SettingDetails = () => {
  const data = [
    { label: 'NAME', value: 'Payment Check time limit' },
    { label: 'VALUE', value: '75' },
    { label: 'CREATED AT', value: 'December 25, 2023 20:44' },
  ];
  return (
    <Box width={'auto'}>
      <DetailsCard title="Setting Details" details={data}></DetailsCard>
    </Box>
  );
};

export default SettingDetails;
