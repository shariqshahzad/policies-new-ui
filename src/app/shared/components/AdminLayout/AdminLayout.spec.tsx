import * as React from 'react';
import { createTestWrapper } from '@takamol/react-qiwa-core';
import { screen } from '@testing-library/react';

import AdminLayout from './AdminLayout';

const MockedMicrofrontendFooter = () => <div>microfrontend footer</div>;
MockedMicrofrontendFooter.displayName = 'MockedMicrofrontendFooter';

const MockedMicrofrontendSidebar = () => <div>microfrontend sidebar</div>;
MockedMicrofrontendSidebar.displayName = 'MockedMicrofrontendSidebar';

describe('AdminLayout', () => {
  it("should load it's contents with skeleton whe auth is loading", async () => {
    createTestWrapper({
      children: (
        <AdminLayout>
          <div>Content</div>
        </AdminLayout>
      ),
    });
    const content = await screen.findByText(/content/i);
    expect(content).toBeInTheDocument();
  });
});
