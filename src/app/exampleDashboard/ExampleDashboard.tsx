import * as React from 'react';
import { Box, Layout } from '@takamol/qiwa-design-system/components';

import exampleImage from 'src/assets/images/example-image.jpg';
import qiwaTransparentLogo from 'src/assets/images/qiwa-transparent-bg.png';
import { TableOfContents } from 'src/app/shared/components/TableOfContents';

import { TodoList } from './components/TodoList';
import { YourCompany } from './components/YourCompany';
import { Compliance } from './components/Compliance';
import { EconomicActivity } from './components/EconomicActivity';
import { Employees } from './components/Employees';
import { NonSaudiEmployees } from './components/NonSaudiEmployees';
import { TopSection } from './components/TopSection';

const ExampleDashboard = () => {
  return (
    <>
      <Box bgColor="business_700">
        <Layout variant="with-sidebar-condensed">
          <TopSection />
        </Layout>
      </Box>
      <Layout variant="with-sidebar-condensed">
        <TableOfContents />
        <TodoList />
        <YourCompany />
        <Compliance />
        <EconomicActivity />
        <Employees />
        <NonSaudiEmployees />
        <img src={exampleImage} alt="" loading="lazy" />
        <img src={qiwaTransparentLogo} alt="" loading="lazy" />
      </Layout>
    </>
  );
};

export default ExampleDashboard;
