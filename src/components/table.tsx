import React from 'react';
import { useWindowUtils } from '@takamol/qiwa-design-system/utils';
import { useId, useState } from 'react';
import { Box, Table, Pagination, Button } from '@takamol/qiwa-design-system/components';

interface Row {
  [key: string]: string | number; // Adjust this according to your data types
}

interface Props {
  columns: string[];
  data: any;
  renderActions?: (isMobileWidth: boolean, variant: string, rowData: any) => JSX.Element;
  variant: string;
  isPaginationEnabled?: boolean;
}

const DynamicTable: React.FC<Props> = ({ columns, data, renderActions, variant, isPaginationEnabled = true }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const id = useId();

  const handleChange = (newPage: number) => {
    setCurrentPage(newPage);
    const element = document.getElementById(id);
    const elementTopPosition = element?.offsetTop;
    if (elementTopPosition === undefined) return;
    window?.scrollTo({
      behavior: 'smooth',
      top: elementTopPosition,
    });
  };

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page whenever items per page changes
  };

  const { isMobileWidth } = useWindowUtils(); // Assuming you have useWindowUtils defined somewhere

  // Calculate the data to display based on current page and items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data && data.slice(startIndex, endIndex);

  return (
    <Box padding={8}>
      <Box direction="column" width="auto" margin={10} bgColor="grayscale_0">
        <Table hasCheckboxesOrRadio={false}>
          <Table.Head>
            <Table.Row>
              {columns.map((column) => (
                <Table.HeadCell key={column}>{column}</Table.HeadCell>
              ))}
              {renderActions && (
                <Table.HeadCell alignCenter hideInPrint>
                  Actions
                </Table.HeadCell>
              )}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {paginatedData?.map((row: any, rowIndex: number) => (
              <Table.Row key={`row-${rowIndex}`}>
                {Object.entries(row).map(([key, value]: [string, any]) => (
                  <Table.Cell key={`cell-${rowIndex}-${key}`}>{value}</Table.Cell>
                ))}
                {renderActions && (
                  <Table.Cell alignCenter hideInPrint>
                    {renderActions(isMobileWidth, variant, row)}
                  </Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        {isPaginationEnabled && (
          <Box padding={16}>
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              onChange={handleChange}
              summaryLabel={({ start, end, total }) => `${start}-${end} of ${total} items`}
              total={data.length}
              variant="business"
              rowsSelectHelperText="Rows per page"
              rowsSelectOnChange={handleItemsPerPageChange}
              rowsSelectOptions={[
                { option: '5', value: '5' },
                { option: '10', value: '10' },
                { option: '15', value: '15' },
                { option: '20', value: '20' },
              ]}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DynamicTable;
