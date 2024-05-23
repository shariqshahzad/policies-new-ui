import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';

const AdminUserDetails = () => {
  const details = [
    { label: "ID", value: "116" },
    { label: "EMAIL", value: "amr.khamis+7@espace.com.eg" },
    { label: "ROLE", value: "MHRSD Employee" },
    { label: "CREATED AT", value: "August 28, 2023 02:43" }
  ];
  return (
    <Box width={'auto'}>
      <DetailsCard title='Admin User Details' details={details}></DetailsCard>
    </Box>
  );
};

export default AdminUserDetails;
