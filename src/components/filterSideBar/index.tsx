import { Blanket, Box, Button, ButtonGroup, Field, Select, Text } from '@takamol/qiwa-design-system/components';
import React, { useState } from 'react';

type Props = {};

const Fields = [
  { title: 'COMPANY NAME' },
  { title: 'COMPANY NUMBER' },
  { title: 'POLICY ID' },
  { title: 'PENDING MHRSD ACCREDITATION DATE' },
];

const Fields2 = [
  { title: 'STATUS' },
  { title: 'POLICY TYPE' },
  { title: 'CONTACT PERSON CITY' },
  { title: 'LAW OFFICE' },
];

const FilterSideBar = (props: Props) => {
  const [isOpened, setIsOpened] = useState(true);
  const toggleIsOpened = () => setIsOpened(!isOpened);
  return (
    <>
      <Box padding={[10, 20]} borderRadius={8} width={['100%', 'auto']} bgColor="grayscale_0">
        <Box px={[10, 20]} borderRadius={8} bgColor="individuals_400">
          <Text variant={'special-caption'} weight={'bold'} color="grayscale_0" my={10}>
            Filters
          </Text>
        </Box>
        {Fields.map((item: any, index: number) => (
          <Box padding={[5, 10]} key={index} direction="column">
            <Text weight="semibold" color="grayscale_500" variant={'body-s'}>
              {item.title}
            </Text>
            <Box gap={10} width={'100%'} direction={'row'} justify={'space-between'}>
              <Select
                maxInputWidth="90%"
                id="select"
                placeholder="contains"
                //   onBlur={}
                //   onChange={}
                options={[
                  { option: 'Status', value: 'item a' },
                  { option: 'Item B', value: 'item b' },
                  { option: 'Item C', value: 'item c' },
                  { option: 'Item D', value: 'item d' },
                  { option: 'Item E', value: 'item e' },
                ]}
                optionsListAriaLabel="select options"
                size="small"
                variant="individuals"
              />
              <Field
                fieldWidth="90%"
                isSmall
                id="test"
                //   onChange={onChange}
                type="text"
              />
            </Box>
          </Box>
        ))}
        {Fields2.map((item: any, index: number) => (
          <Box padding={[5, 10]} key={index}>
            <Text weight="semibold" color="grayscale_500" variant={'body-s'}>
              {item.title}
            </Text>
            <Select
              size="small"
              id="select"
              placeholder="any"
              options={[
                { option: 'Status', value: 'item a' },
                { option: 'Item B', value: 'item b' },
                { option: 'Item C', value: 'item c' },
                { option: 'Item D', value: 'item d' },
                { option: 'Item E', value: 'item e' },
              ]}
              optionsListAriaLabel="select options"
              variant="individuals"
            />
          </Box>
        ))}
        <Box align={'center'} mt={20}>
          {/* <Button onClick={toggleIsOpened}>Show blanket</Button> */}
          <ButtonGroup direction={['column', 'row']} size="small">
            <Button variant="business_primary_filled">filter</Button>
            <Button variant="business_ghost">clear filters</Button>
          </ButtonGroup>
        </Box>
      </Box>
      {/* </Blanket> */}
    </>
  );
};

export default FilterSideBar;
