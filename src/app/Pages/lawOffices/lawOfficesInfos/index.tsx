import React from 'react';
import DynamicTable from '../../../../components/table';
import { Box, Button } from '@takamol/qiwa-design-system/components';
import { lawOfficesInfos } from 'src/data/LawOffices.data';
import FilterButtonComponent from 'src/components/filterBar';
import { useNavigate } from 'react-router-dom';

const LawOfficesInfosComponent: any = () => {
  const columns: string[] = [
    'ID',
    'Law Office ID',
    'Name',
    'Commercial Name',
    'Phone',
    'Status',
    'Availability',
    'Saudi Lawyers',
    'City',
    'Blocked',
    'Eligible',
    'Created at',
  ];

  const buttonsData = [
    { label: 'All', badgeVariant: 'business', badgeCount: 220, buttonVariant: 'business_ghost' },
    { label: 'Pending', badgeVariant: 'individuals', badgeCount: 28, buttonVariant: 'individuals_ghost' },
    { label: 'Accepted', badgeVariant: 'individuals', badgeCount: 172, buttonVariant: 'individuals_ghost' },
    { label: 'Rejected', badgeVariant: 'individuals', badgeCount: 10, buttonVariant: 'individuals_ghost' },
    {
      label: 'Rejected to update info',
      badgeVariant: 'individuals',
      badgeCount: 10,
      buttonVariant: 'individuals_ghost',
    },
    {
      label: 'Pending accepting info update',
      badgeVariant: 'individuals',
      badgeCount: 0,
      buttonVariant: 'individuals_ghost',
    },
    { label: 'Blocked', badgeVariant: 'business', badgeCount: 3, buttonVariant: 'business_ghost' },
    { label: 'Unblocked', badgeVariant: 'business', badgeCount: 217, buttonVariant: 'business_ghost' },
  ];
  const navigate = useNavigate();
  const renderActions = () => {
    return (
      <Button variant="business_ghost" size="small" onClick={()=>navigate('/law-office-infos/some-info-id')}>
        View
      </Button>
    );
  };

  const variant: string = ''; // Define your variant

  return (
    <>
      <Box ps={20} height={80} padding={40}>
        <FilterButtonComponent buttonsData={buttonsData} />
      </Box>
      <DynamicTable columns={columns} data={lawOfficesInfos} renderActions={renderActions} variant={variant} />
    </>
  );
};

export default LawOfficesInfosComponent;
