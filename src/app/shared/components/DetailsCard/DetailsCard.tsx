import { Box, Divider, Link, Tag, Text } from '@takamol/qiwa-design-system/components';
import React from 'react';

interface IDetailsCardProps {
  details: Array<{
    label: string;
    value: string;
    style?: string;
    redirectTo?: string;
  }>;
  title: string;
}

export const DetailsCard = ({ details, title }: IDetailsCardProps) => (
  <>
    <Box margin={20} borderRadius={8} width="auto" bgColor="grayscale_0">
      <Box width="auto" px={10} mb={10} borderRadius={8} bgColor="individuals_400">
        <Text variant={'special-caption'} weight={'bold'} color="grayscale_0" my={10}>
          {title}
        </Text>
      </Box>

      {details.map((detail, index) => (
        <Box px={32}>
          <Box my={10} direction={'row'}>
            <Box justify={'center'} width={400}>
              <Text weight={'bold'} color="grayscale_500" variant={'special-caption'}>
                {detail.label}
              </Text>
            </Box>
            <Box minWidth={'0'}>
              {detail.style == 'chip' ? (
                <Tag label={detail.value} />
              ) : detail.style == 'link' ? (
                <Link href={detail.redirectTo} target='_blank' >
                  <Text variant={'special-caption'} weight={'medium'}>
                    {detail.value}
                  </Text>
                </Link>
              ) : (
                <Text variant={'special-caption'} weight={'medium'}>
                  {detail.value}
                </Text>
              )}
            </Box>
          </Box>
          {index !== details.length - 1 && <Divider direction="horizontal" variant="dark" />}
        </Box>
      ))}
    </Box>
  </>
);
