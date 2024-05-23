import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';

const MLSDContactInformationDetails = () => {
  const data = [
    { label: 'ID', value: '1' },
    { label: 'PHONE', value: '0512345678' },
    { label: 'FAX', value: '00966585676465' },
    { label: 'EMAIL', value: 'mlsdadmin@admin.com' },
  ];
  return (
    <Box width={'auto'}>
      <DetailsCard title="MHRSD Contact Information Details" details={data}></DetailsCard>
    </Box>
  );
};

export default MLSDContactInformationDetails;
