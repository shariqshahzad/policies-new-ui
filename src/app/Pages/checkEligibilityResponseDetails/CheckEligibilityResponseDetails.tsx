import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';
import { RecordHistory } from 'src/app/shared/components/RecordHistory';

const historyData = [
  {
    policyType: 'Non Standard Policy',
    accreditionDate: new Date().toDateString(),
  },
];

const CheckEligibilityResponseDetails = () => {
  const details = [
    { label: 'LAW OFFICE NAME', value: 'شركة حمدان سعد الحمدان وأولاده للتجارة والمقاولات' },
    { label: 'LABOR OFFICE', value: '20' },
    { label: 'SEQUENCE NUMBER', value: '1688672' },
    { label: 'RESPONSE CODE', value: '00000000' },
    {
      label: 'REQUEST BODY',
      value:
        '{:SearchUserSubscriptionsRq=>{:Header=>{:TransactionId=>"1607606304", :ChannelId=>"Qiwa", :SessionId=>"212", :RequestTime=>"2019-10-10 00:00:00.555", :MWRequestTime=>"2019-10-10 00:00:00.555", :ServiceCode=>"SUS00001", :DebugFlag=>"1"}, :Body=>{:LaborOfficeId=>"20", :EstablishmentSequence=>"1688672", :StatusId=>"1", :PageSize=>"1", :PageIndex=>"1"}}}',
    },
    { label: 'CREATED AT', value: 'May 23, 2024 14:23' },
    { label: 'UPDATED AT', value: 'May 23, 2024 14:23' },
  ];
  return (
    <Box width={'auto'}>
      <DetailsCard title="Check Eligibility Response Details" details={details}></DetailsCard>
    </Box>
  );
};

export default CheckEligibilityResponseDetails;
