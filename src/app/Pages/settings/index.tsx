import React from 'react';
import DynamicTable from '../../../components/table';
import { Box, Button } from '@takamol/qiwa-design-system/components';
import FilterButtonComponent from 'src/components/filterBar';
import { SettingsData } from 'src/data/settings.data';
import { buttonsData } from 'src/interfaces/adminuser.type';
import { AuthRoute } from 'src/app/routing/enums/AuthRoute.enum';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const columns: string[] = ['Name', 'Value', 'File', 'Updated at', 'Created at'];
  const navigate = useNavigate();

  const renderActions = () => {
    return (
      <Button variant="business_ghost" size="small" onClick={()=>{
        navigate(`${AuthRoute.settings}/1`)
      }}>
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
      <DynamicTable columns={columns} data={SettingsData} renderActions={renderActions} variant={variant} />
    </>
  );
};

export default Settings;
