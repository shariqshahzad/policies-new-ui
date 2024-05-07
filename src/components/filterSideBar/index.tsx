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
      {/* <Button onClick={toggleIsOpened}>Show blanket</Button> */}

      {/* <Blanket isOpened={isOpened} onClick={toggleIsOpened} align="center" justify="flex-end" shouldCoverNavigation> */}
      <Box margin={[10, 20]} borderRadius={8} width={['100%', 'auto']} bgColor="grayscale_0">
        <Box px={[10, 20]} mb={10} borderRadius={8} bgColor="individuals_400">
          <Text variant={'special-caption'} weight={'bold'} color="grayscale_0" my={10}>
            Filters
          </Text>
        </Box>
        {Fields.map((item: any, index: number) => (
          <Box margin={[5, 10]} key={index}>
            <Text mx={[5, 10]} weight={'bold'} color="grayscale_500" variant={'special-caption'}>
              {item.title}
            </Text>
            <Box direction={['column', 'row']} mx={[5, 10]}>
              <Box mb={[10, 0]}>
                <Select
                  id="select"
                  placeholder="contains"
                  maxInputWidth={['100%', 150]}
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
              </Box>
              <Box mx={[0, 10]}>
                <Field
                  isSmall
                  id="test"
                  maxInputWidth={130}
                  //   onChange={onChange}
                  type="text"
                />
              </Box>
            </Box>
          </Box>
        ))}
        {Fields2.map((item: any, index: number) => (
          <Box margin={[5, 10]} key={index}>
            <Text mx={[5, 10]} weight={'bold'} color="grayscale_500" variant={'special-caption'}>
              {item.title}
            </Text>
            <Box mx={[5, 10]}>
              <Select
                size="small"
                id="select"
                placeholder="any"
                maxInputWidth={['100%', 320]}
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
                variant="individuals"
              />
            </Box>
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
