import React from 'react';
import DynamicTable from '../../../components/TableLayout/table';
import { Button } from '@takamol/qiwa-design-system/components';

// Define interface for Activity Records data
interface ActivityRecord {
  ItemId: number;
  User: string;
  Item: string;
  Event: string;
  CreatedAt: string;
}

// Define sample data for Activity Records
const activityRecords: ActivityRecord[] = [
  {
    ItemId: 10494,
    User: 'amr.khamis+6@espace.com.eg',
    Item: 'Law Office شركة بقشان التجارية شركة احمد سليمان بقشان وشريكه',
    Event: 'Accepted',
    CreatedAt: 'December 06, 2023 14:20',
  },
  {
    ItemId: 10493,
    User: 'amr.khamis+6@espace.com.eg',
    Item: 'Law Office مؤسسة الجزيرة للصحافة والطباعه والنشر',
    Event: 'Accepted',
    CreatedAt: 'December 06, 2023 14:03',
  },
  // Add more data as needed
];

const ActivityRecordsComponent: React.FC = () => {
  const columns: string[] = ['Item Id', 'User', 'Item', 'Event', 'Created at'];

  const renderActions = (rowData: ActivityRecord) => {
    return (
      <Button variant="business_ghost" size="small" onClick={() => handleView(rowData)}>
        View
      </Button>
    );
  };

  const handleView = (rowData: ActivityRecord) => {
    // Logic to handle view action
    console.log('View clicked for Item ID:', rowData.ItemId);
  };

  const handleEdit = (rowData: ActivityRecord) => {
    // Logic to handle edit action
    console.log('Edit clicked for Item ID:', rowData.ItemId);
  };

  const variant: string = ''; // Define your variant

  return <DynamicTable columns={columns} data={activityRecords} renderActions={renderActions} variant={variant} />;
};

export default ActivityRecordsComponent;
