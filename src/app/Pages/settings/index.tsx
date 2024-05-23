import React from 'react';
import DynamicTable from '../../../components/table';
import { Box, Button } from '@takamol/qiwa-design-system/components';
import FilterButtonComponent from 'src/components/filterBar';
import { SettingsData } from 'src/data/settings.data';

const Settings: React.FC = () => {
  const columns: string[] = ['Name', 'Value', 'File', 'Updated at', 'Created at'];

  const renderActions = () => {
    return (
      <Button variant="business_ghost" size="small">
        View/Edit
      </Button>
    );
  };

  const variant: string = ''; // Define your variant

  return (
    <>
      <Box ps={20} height={80} padding={40}>
        <FilterButtonComponent buttonsData={buttonsData} />
      </Box>
      <DynamicTable columns={columns} data={SettingsData} renderActions={renderActions} variant={variant} />
    </>
  );
};

export default Settings;