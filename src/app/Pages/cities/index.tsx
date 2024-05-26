import React from 'react';
import DynamicTable from '../../../components/table';
import { Button, ButtonGroup } from '@takamol/qiwa-design-system/components';
import { City } from 'src/interfaces/city.type';
import { cities } from 'src/data/cities.data';
import { AuthRoute } from 'src/app/routing/enums/AuthRoute.enum';
import { useNavigate } from 'react-router-dom';
import { useCities } from 'src/app/exampleDashboard/hooks/useCities';

// Define interface for Cities data

// Define sample data for Cities

const Cities: React.FC = () => {
  const columns: string[] = ['ID', 'Arabic Name', 'English Name', 'Created At'];
  const { data, isLoading, refetch } = useCities(
    {
      per_page:10,
      page:0
    },
    true,
  );
  console.log(data);
  const { data: policyRequests, meta: metaPagination } = (data || {}) as any;
  // const tableContentRows = useRequestHistoryTableRows(policyRequests, refetch);
  const renderActions = (rowData: City) => {
    const navigate = useNavigate();
    return (
      <ButtonGroup size="small">
        <Button variant="business_ghost" size="small" onClick={() => navigate(`${AuthRoute.cities}/1`)}>
          View
        </Button>
        <Button variant="business_ghost" size="small" onClick={() => handleEdit(rowData)}>
          Edit
        </Button>
        <Button variant="business_ghost" size="small" onClick={() => handleDelete(rowData)}>
          Delete
        </Button>
      </ButtonGroup>
    );
  };

  const handleView = (rowData: City) => {
    console.log('View clicked for ID:', rowData.ID);
  };

  const handleEdit = (rowData: City) => {
    console.log('Edit clicked for ID:', rowData.ID);
  };

  const handleDelete = (rowData: City) => {
    console.log('Delete clicked for ID:', rowData.ID);
  };

  return (
    <DynamicTable
      columns={columns}
      data={cities}
      renderActions={renderActions}
      variant="business"
      isPaginationEnabled={true}
    />
  );
};

export default Cities;
