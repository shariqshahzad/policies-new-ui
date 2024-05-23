import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';
import { RecordHistory } from 'src/app/shared/components/RecordHistory';

const LawyerDetails = () => {
  const data = [
    { label: "NATIONAL ID NUMBER", value: "1014801565" },
    { label: "NAME", value: "أحمد النمر" },
    { label: "CREATED AT", value: "May 15, 2024 10:33" }
  ];
  return (
    <Box width={'auto'}>
      <DetailsCard title="Standard Policy Details" details={data}></DetailsCard>
      <RecordHistory columns={['Law Office']} data={[{lawOffice:'مؤسسة خدمات الوسيط للاتصالات وتقنية المعلومات'}]} />
    </Box>
  );
};

export default LawyerDetails;
