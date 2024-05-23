import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';

const StandardPolicyDetails = () => {
  const data = [
    { label: 'ID', value: '7' },
    { label: 'NUMBER', value: '22222222' },
    { label: 'VACATION DAYS NUMBER', value: '21' },
    { label: 'ANNUAL VACATION DAYS NUMBER', value: '30' },
    { label: 'ACTIVE', value: 'NO' },
    { label: 'WORKING HOURS NUMBER', value: '8' },
    { label: 'WORKING HOURS NUMBER IN RAMADAN', value: '6' },
    { label: 'CALENDAR', value: 'Gregorian' },
    { label: 'NUMBER OF WORKDAYS IN A WEEK', value: '6' },
    { label: 'OFF DAYS', value: 'Thursday' },
    { label: 'POLICY FILE', value: 'policy_certificate.pdf' },
    { label: 'REQUESTED DATA', value: 'December 28, 2021 20:15' },
    { label: 'UPDATED AT', value: 'January 11, 2022 13:19' }
  ];
  return (
    <Box width={'auto'}>
      <DetailsCard title="Standard Policy Details" details={data}></DetailsCard>
    </Box>
  );
};

export default StandardPolicyDetails;
