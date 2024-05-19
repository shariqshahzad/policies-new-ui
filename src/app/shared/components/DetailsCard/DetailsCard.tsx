import { Box, Divider, Tag, Text } from '@takamol/qiwa-design-system/components';
import React from 'react';

interface IDetailsCardProps {
  details: Array<{
    label: string;
    value: string;
    style?: string;
  }>;
}

export const DetailsCard = ({ details }: IDetailsCardProps) => (
  <>
    <Box margin={20} borderRadius={8} width="auto" bgColor="grayscale_0">
      <Box px={10} mb={10} borderRadius={8} bgColor="individuals_400">
        <Text variant={'special-caption'} weight={'bold'} color="grayscale_0" my={10}>
          Company Details
        </Text>
      </Box>

      {details.map((detail,index) => (
        <Box px={10} >
          <Box my={10} direction={'row'}>
            <Box justify={'center'} width={400}>
              <Text weight={'bold'} color="grayscale_500" variant={'special-caption'}>
                {detail.label}
              </Text>
            </Box>
            <Box>
              {detail.style == 'chip' ? (
                <Tag label={detail.value} />
              ) : (
                <Text variant={'special-caption'} weight={'medium'}>
                  {detail.value}
                </Text>
              )}
            </Box>
          </Box>
          { index!==details.length-1 && <Divider direction="horizontal" variant="dark" />}
        </Box>
      ))}
    </Box>
  </>
);
