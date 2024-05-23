import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';

const dummyData = {
  ID: '96846',
  NAME: 'فرع شركة سدر للخدمات',
  CITY: 'جدة',
  BLOCKED: 'NO',
  UPDATED_AT: 'May 15, 2024 16:40',
  CREATED_AT: 'May 15, 2024 16:40',
  REGISTERED_AT_NITAQAT: 'NO',
  NITAQ_ECONOMIC_ACTIVITY_ID: '450',
  ESTABLISHMENT_STATUS_ID: '1',
  MAIN_BRANCH: 'EMPTY',
  CLONE_EXPIRY_DATE: 'EMPTY',
};

const historyData = [
  {
    policyType: 'Non Standard Policy',
    accreditionDate: new Date().toDateString(),
    policyFile: 'Standard Policy.pdf',
  },
];

const PolicyReviewRequestDetails = () => {
  const companyInfoArray = [
    { label: 'COMPANY', value: 'شركة أبناء نهار جازي الرحيلي للتجارة' },
    { label: 'COMPANY NUMBER', value: '16-38440' },
    { label: 'LAW OFFICE', value: 'COmm' },
    { label: 'LAW OFFICE ID', value: '16-38440' },
    { label: 'STATUS', value: 'Accredited by MHRSD' },
    { label: 'MAIN BRANCH POLICY ID', value: 'EMPTY' },
    { label: 'POLICY TYPE', value: 'Custom Policy' },
    { label: 'POLICY FILE', value: '16-38440-CSTM.pdf' },
    { label: 'POLICY REVIEWER', value: 'Go to policy reviewer' },
    { label: 'REVIEWER', value: 'EMPTY' },
    { label: 'MHRSD REJECTION REASON', value: 'EMPTY' },
    { label: 'CREATED BY LABOR OFFICE', value: 'NO' },
    { label: 'CREATION DATE', value: 'May 16, 2024 15:12' },
    { label: 'REJECTION REASON', value: 'EMPTY' },
    { label: 'COUNT EMPLOYEES', value: '13' },
    { label: 'PRICE', value: 'EMPTY' },
    { label: 'UNASSIGNED BEFORE', value: 'NO' },
    { label: 'PENDING MHRSD ACCREDITATION DATE', value: 'EMPTY' },
  ];
  const personalInfoArray = [
    { label: "NAME", value: "Mazen sallam" },
    { label: "PHONE", value: "0512345678" },
    { label: "EMAIL", value: "mazensallam75@gmail.com" },
    { label: "CITY", value: "الرياض" }
  ];
  return (
    <Box width={'auto'}>
      <DetailsCard title="Policy Review Request Details" details={companyInfoArray}></DetailsCard>
      <DetailsCard title="Zero" details={personalInfoArray}></DetailsCard>
    </Box>
  );
};

export default PolicyReviewRequestDetails;
