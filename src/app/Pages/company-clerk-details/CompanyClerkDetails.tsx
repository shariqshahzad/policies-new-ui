import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';
import { RecordHistory } from 'src/app/shared/components/RecordHistory';

const historyData = [{
    policyType : "Non Standard Policy",
    accreditionDate : new Date().toDateString()
}]

const CompanyClerkDetails = () => {
  const details = [
    { label: "NATIONAL ID NUMBER", value: "1002981551" },
    { label: "FIRST NAME", value: "عبدالله" },
    { label: "LAST NAME", value: "السليمان" },
    { label: "UPDATED AT", value: "May 21, 2024 13:01" },
    { label: "CREATED AT", value: "May 21, 2024 13:01" }
  ];
  return (
    <Box width={'auto'}>
      <DetailsCard title='Company Details' details={details}></DetailsCard>
      <RecordHistory
        columns={['COMPANY', 'ROLE']}
        data={historyData}
      />
    </Box>
  );
};

export default CompanyClerkDetails;
