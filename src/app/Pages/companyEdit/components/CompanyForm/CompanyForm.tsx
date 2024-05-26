import { Box, Button, Select, Text } from '@takamol/qiwa-design-system/components';
import { Field } from '@takamol/qiwa-design-system/components/Field';
import { useFormik } from 'formik';
import React from 'react';

const CompanyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      city: '',
      companyNumber: '',
      nitaqEconomicActivityId: '',
      establishmentStatusId: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box padding={20} margin={20} bgColor="grayscale_0" direction={'row'} width="auto" gap={10}>
        <Box width={'15%'} justify={'center'} gap={25} direction={'column'}>
          <Text variant={'special-captionSmall'} weight={'medium'}>
            Name
          </Text>
          <Text variant={'special-captionSmall'} weight={'medium'}>
            City
          </Text>
          <Text variant={'special-captionSmall'} weight={'medium'}>
            Company Number*
          </Text>
          <Text variant={'special-captionSmall'} weight={'medium'}>
            Nitaq Economic Activity ID
          </Text>
          <Text variant={'special-captionSmall'} weight={'medium'}>
            Establishment Status ID
          </Text>
        </Box>
        <Box width={'85%'} gap={10} direction={'column'}>
          <Field
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            maxInputWidth={'276px'}
            value={formik.values.name}
            isSmall
          />
          <Field
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.name}
            maxInputWidth={'276px'}
            isSmall
          />
          <Select
            size="small"
            id="select"
            options={[
              {
                option: 'Very long option name with many and many words',
                value: 'item a',
              },
              {
                option: 'Item B',
                value: 'item b',
              },
              {
                option: 'Item C',
                value: 'item c',
              },
              {
                option: 'Item D',
                value: 'item d',
              },
              {
                option: 'Item E',
                value: 'item e',
              },
            ]}
            optionsListAriaLabel="select options"
            placeholder="Placeholder"
            value={'item a'}
            variant="business"
            maxInputWidth={'276px'}
          />
          <Field
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.name}
            isSmall
            type="text"
            maxInputWidth={'276px'}
          />

          <Field
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.name}
            maxInputWidth={'276px'}
            isSmall
          />
        </Box>
      </Box>
      <Box direction={'row'} margin={20} gap={10}>
        <Button variant="business_secondary_filled">Submit</Button>
        <Button variant="business_ghost">Cancel</Button>
      </Box>
    </form>
  );
};

export default CompanyForm;
