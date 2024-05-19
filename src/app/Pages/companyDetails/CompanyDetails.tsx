import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';

const dummyData = {
  ID: '96846',
  NAME: 'فرع شركة سدر للخدمات',
  CITY: 'جدة',
  BLOCKED: 'NO',
  UPDATED_AT: 'May 15, 2024 16:40',
  CREATED_AT: 'May 15, 2024 16:40',
  REGISTERED_AT_NITAQAT: 'NO',
  NITAQ_ECONOMIC_ACTIVITY_ID: "450",
  ESTABLISHMENT_STATUS_ID: "1",
  MAIN_BRANCH: 'EMPTY',
  CLONE_EXPIRY_DATE: 'EMPTY',
};

const CompanyDetails = () => {
  const details = [
    { label: 'ID', value: dummyData.ID },
    { label: 'Name', value: dummyData.NAME },
    { label: 'City', value: dummyData.CITY },
    { label: 'Blocked', value: dummyData.BLOCKED,style:"chip" },
    { label: 'Updated At', value: dummyData.UPDATED_AT },
    { label: 'Created At', value: dummyData.CREATED_AT },
    { label: 'Registered At NITAQAT', value: dummyData.REGISTERED_AT_NITAQAT,style:"chip" },
    { label: 'NITAQ Economic Activity ID', value: dummyData.NITAQ_ECONOMIC_ACTIVITY_ID },
    { label: 'Establishment Status ID', value: dummyData.ESTABLISHMENT_STATUS_ID },
    { label: 'Main Branch', value: dummyData.MAIN_BRANCH },
    { label: 'Clone Expiry Date', value: dummyData.CLONE_EXPIRY_DATE },
  ];
  return (
    <>
    <DetailsCard details={details}></DetailsCard>
    <DetailsCard details={details}></DetailsCard>
    </>
  )

};

export default CompanyDetails;
