import React from 'react';
import DynamicTable from '../../../components/table';
import { Box, Button } from '@takamol/qiwa-design-system/components';
import { Company } from '../../../interfaces/company.type';
import { companies } from '../../../data/company.data';
import { useNavigate } from 'react-router-dom';

const CompanyComponent: React.FC = () => {
  const columns: string[] = ['ID', 'Name', 'Company Number', 'City', 'Blocked'];

  const renderActions = () => {
    const navigate = useNavigate();

    const redirectTo = (route: string) => {
      navigate(route);
    };
    return (
      <Box direction={'row'} justify={'center'} gap={6}>
        <Button onClick={() => redirectTo('/companies/company-id-here')} variant="business_ghost" size="small">
          View
        </Button>
        <Button onClick={() => redirectTo('/companies/company-id-here/edit')} variant="business_ghost" size="small">
          Edit
        </Button>
      </Box>
    );
  };

  const variant: string = ''; // Define your variant

  return <DynamicTable columns={columns} data={companies} renderActions={renderActions} variant={variant} />;
};

export default CompanyComponent;
