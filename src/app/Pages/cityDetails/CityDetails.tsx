import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';

const CityDetails = () => {
  const details = [
    { label: "ID", value: "6147" },
    { label: "ARABIC NAME", value: "الجوف" },
    { label: "ENGLISH NAME", value: "الجوف" },
    { label: "UPDATED AT", value: "August 31, 2021 18:16" },
    { label: "CREATED AT", value: "August 31, 2021 18:16" }
  ];
  return (
    <Box width={'auto'}>
      <DetailsCard title='City Details' details={details}></DetailsCard>
    </Box>
  );
};

export default CityDetails;
