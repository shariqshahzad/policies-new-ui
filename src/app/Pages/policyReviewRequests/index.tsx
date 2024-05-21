import React, { useState } from 'react';
import DynamicTable from '../../../components/table';
import { Blanket, Box, Button } from '@takamol/qiwa-design-system/components';
import { Policy } from 'src/interfaces/policy.type';
import { policyData } from 'src/data/policy.data';
import FilterHeader from 'src/components/filterBar';
import FilterSideBar from 'src/components/filterSideBar';
import { useWindowUtils } from '@takamol/qiwa-design-system/utils';
import FilterButtonComponent from 'src/components/filterBar';
import { useNavigate } from 'react-router-dom';

const policyReviewRequests: React.FC = () => {
  const { isMobileWidth } = useWindowUtils();

  const data: Policy[] = Array(8)
    .fill(null)
    .map(() => ({
      ...policyData,
    }));

  const columns: string[] = [
    'ID',
    'Company Name',
    'Company Number',
    'Contact Person Name',
    'Contact Person City Name',
    'Status',
    'Policy Type',
    'Law officeCount employees',
    'Reviewer',
    'Unassigned before',
    'Pending MHRSD accreditation date',
  ];

  const buttonsData = [
    { label: 'All', badgeVariant: 'business', badgeCount: 3241, buttonVariant: 'business_ghost' },
    { label: 'My Requests', badgeVariant: 'individuals', badgeCount: 8, buttonVariant: 'individuals_ghost' },
    { label: 'Unassigned Requests', badgeVariant: 'business', badgeCount: 3241, buttonVariant: 'business_ghost' },
    { label: 'Standard Policy', badgeVariant: 'individuals', badgeCount: 1670, buttonVariant: 'individuals_ghost' },
    { label: 'Non Standard Policy', badgeVariant: 'business', badgeCount: 1126, buttonVariant: 'business_ghost' },
    { label: 'Custom Policy', badgeVariant: 'individuals', badgeCount: 445, buttonVariant: 'individuals_ghost' },
  ];
  const navigate = useNavigate();
  const renderActions = () => {
    return (
      <Button
        variant="business_ghost"
        onClick={(event) => {
          event?.stopPropagation();
          navigate('policy-review-request/request-id-here');
          // onActionClick(event);
        }}
        size="small"
      >
        View
      </Button>
    );
  };

  const variant: string = ''; // Define your variant

  return (
    <>
      <Box direction="row" justify={'space-between'}>
        <Box>
          <Box ps={20} height={80} padding={40}>
            <FilterHeader buttonsData={buttonsData} />
          </Box>
          <DynamicTable columns={columns} data={data} renderActions={renderActions} variant={variant} />
        </Box>

        <Box width="20%">
          <FilterSideBar />
        </Box>
      </Box>
    </>
  );
};

export default policyReviewRequests;
