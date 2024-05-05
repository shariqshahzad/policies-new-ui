import * as React from 'react';
import { Layout } from '@takamol/qiwa-design-system/components';

import { TodoList } from '../exampleDashboard/components/TodoList';
import { Compliance } from '../exampleDashboard/components/Compliance';
import { EconomicActivity } from '../exampleDashboard/components/EconomicActivity';
import { Employees } from '../exampleDashboard/components/Employees';
import { TableOfContents } from 'src/app/shared/components/TableOfContents';

const ExamplePublicDashboard = () => {
  return (
    <Layout variant="default">
      <TableOfContents />
      <TodoList />
      <Compliance />
      <EconomicActivity />
      <Employees />
    </Layout>
  );
};

export default ExamplePublicDashboard;
