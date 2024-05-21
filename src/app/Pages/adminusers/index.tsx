import React from 'react';
import DynamicTable from '../../../components/table';
import { Box, Button } from '@takamol/qiwa-design-system/components';

import { adminUsersData } from 'src/data/admin.data';
import FilterHeader from 'src/components/filterBar';
import { buttonsData } from 'src/interfaces/adminuser.type';

// Define interface for admin user data

const AdminUsers: React.FC = () => {
  const columns: string[] = [
    'ID',
    'email',
    'Role',
    'Created at',
    // New column for view and delete buttons
  ];

  const renderActions = () => {
    return (
      <div>
        <Button variant="business_ghost" size="small">
          View
        </Button>
      </div>
    );
  };

  const variant: string = ''; // Define your variant

  return (
    <>
      <Box ps={20} height={80} padding={40}>
        <FilterHeader buttonsData={buttonsData} />
      </Box>
      <DynamicTable columns={columns} data={adminUsersData} renderActions={renderActions} variant={variant} />
    </>
  );
};

export default AdminUsers;
