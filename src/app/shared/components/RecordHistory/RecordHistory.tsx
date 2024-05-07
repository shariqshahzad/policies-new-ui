import { Box, Divider, Tag, Text } from '@takamol/qiwa-design-system/components';
import React from 'react';
import DynamicTable from 'src/components/table';

interface IDetailsCardProps {
  data: any[];
  columns: string[];
  title: string;
}

export const RecordHistory = ({ columns, data, title }: IDetailsCardProps) => (
  <>
    <Box margin={20} borderRadius={8} width="auto" bgColor="grayscale_0">
      <Box px={10} mb={10} borderRadius={8} bgColor="individuals_400">
        <Text variant={'special-caption'} weight={'bold'} color="grayscale_0" my={10}>
          {title}
        </Text>
      </Box>

      <DynamicTable columns={columns} variant="" data={data} />
    </Box>
  </>
);
