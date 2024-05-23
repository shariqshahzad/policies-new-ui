import { DetailsCard } from 'src/app/shared/components/DetailsCard';
import React from 'react';
import { Box } from '@takamol/qiwa-design-system/components';
import DynamicTable from 'src/components/table';
import { RecordHistory } from 'src/app/shared/components/RecordHistory';
import { useNavigate } from 'react-router-dom';

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
    fullName: 'test',
    nationalId: 123123123,
    businessLicenseFile: 'Standard Policy.pdf',
    qualificationFile: 'Standard Policy.pdf',
  },
];

const LawyerData = [
  {
    id: '122333',
    lawyer: 'Aitezaz Ehsan',
  },
];

const LawOfficeInfoDetails = () => {
  const navigate = useNavigate();
  const details = [
    { label: 'LAW OFFICE ID', value: '1-62309' },
    { label: 'NAME', value: 'مصنع الوطن للاثاث وبرادات المياة' },
    { label: 'COMMERCIAL NAME', value: 'test' },
    { label: 'PHONE', value: '0569658085' },
    {
      label: 'THE LICENSE HAS BEEN GRANTED FOR FIVE YEARS',
      value: 'picture.png',
      style: 'link',
      redirectTo: '/companies',
    },
    {
      label: 'HAS BEEN WORKING IN THE LEGAL FIELD FOR A PERIOD OF NOT LESS THAN FIVE YEARS',
      value: 'picture.png',
      style: 'link',
      redirectTo: '/companies',
    },
    {
      label: 'HAS PREPARED AND DISCUSSED REGULATIONS FOR ORGANIZING WORK OR PLEADING BEFORE IN FRONT OF LABOUR BODIES',
      value: 'EMPTY',
    },
    { label: 'REJECTION REASON', value: 'EMPTY' },
    { label: 'STATUS', value: 'Pending' },
    { label: 'AVAILABILITY', value: 'Available' },
    { label: 'CITY', value: 'الرياض' },
    { label: 'EMAIL', value: 'test@gamil.com' },
    { label: 'BLOCKED', value: 'NO', style: 'chip' },
    { label: 'ELIGIBLE', value: 'YES', style: 'chip' },
  ];
  return (
    <Box width={'auto'}>
      <DetailsCard title="Company Details" details={details}></DetailsCard>
      <RecordHistory
        columns={['Full Name', 'National Id', 'Business License File', 'Qualification File']}
        data={historyData}
      />
      <RecordHistory columns={['ID', 'Lawyer']} data={LawyerData} />
      <RecordHistory title="Activity Records" columns={['ID', 'Lawyer']} data={[]} />
    </Box>
  );
};

export default LawOfficeInfoDetails;
