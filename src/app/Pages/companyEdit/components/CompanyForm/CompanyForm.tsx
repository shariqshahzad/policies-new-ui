import { Box, Select, Text } from '@takamol/qiwa-design-system/components';
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
      <Box direction={'row'} width="auto" gap={10}>
        <Box justify={'center'} gap={20} width={'fit-content'} direction={'column'}>
          <Text>Name</Text>
          <Text>Company Number*</Text>
          <Text>Nitaq Economic Activity ID</Text>
          <Text>Establishment Status ID</Text>
        </Box>
        <Box width={'fit-content'} gap={10} direction={'column'}>
          <Field
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.name}
            isSmall
          />
          <Select
            size="small"
            id="select"
            maxInputWidth={['100%', 240]}
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
            variant="individuals"
          />
          <Field
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.name}
            isSmall
            type="text"
          />

          <Field
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.name}
            isSmall
          />

        </Box>
      </Box>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CompanyForm;
