import React from 'react';
import { useWindowUtils } from '@takamol/qiwa-design-system/utils';
import { useId, useState } from 'react';
import { Box, Table, Pagination } from '@takamol/qiwa-design-system/components';

interface Row {
  [key: string]: string | number; // Adjust this according to your data types
}

interface Props {
  columns: string[];
  data: Row[];
  renderActions: (isMobileWidth: boolean, variant: string) => React.ReactNode;
  variant: string;
}

const DynamicTable: React.FC<Props> = ({ columns, data, renderActions, variant }) => {
  const [currentPage, setCurrentPage] = useState(1);
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
  const { isMobileWidth } = useWindowUtils(); // Assuming you have useWindowUtils defined somewhere

  return (
    <Box direction="column" gap={32} width={['100%', '100%']} bgColor="grayscale_0" padding={8}>
      <Table>
        <Table.Head>
          <Table.Row>
            {columns.map((column) => (
              <Table.HeadCell key={column}>{column}</Table.HeadCell>
            ))}
            {!isMobileWidth && (
              <Table.HeadCell alignCenter hideInPrint>
                Actions
              </Table.HeadCell>
            )}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map((row, rowIndex) => (
            <Table.Row key={`row-${rowIndex}`}>
              {Object.entries(row).map(([key, value]) => (
                <Table.Cell key={`cell-${rowIndex}-${key}`}>{value}</Table.Cell>
              ))}
              {!isMobileWidth && (
                <Table.Cell alignCenter hideInPrint>
                  {renderActions(isMobileWidth, variant)}
                </Table.Cell>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Box width="100%" align="flex-end" pb={32}>
        <Pagination currentPage={currentPage} total={data.length} itemsPerPage={5} onChange={handleChange} />
      </Box>
    </Box>
  );
};

export default DynamicTable;
