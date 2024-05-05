import * as React from 'react';
import { createTestWrapper } from '@takamol/react-qiwa-core';
import { screen } from '@testing-library/react';

import { Layout } from '.';

const MockedMicrofrontendFooter = () => <div>microfrontend footer</div>;
MockedMicrofrontendFooter.displayName = 'MockedMicrofrontendFooter';

const MockedMicrofrontendSidebar = () => <div>microfrontend sidebar</div>;
MockedMicrofrontendSidebar.displayName = 'MockedMicrofrontendSidebar';

describe('Layout', () => {
  it("should load it's contents with skeleton whe auth is loading", async () => {
    createTestWrapper({
      children: (
        <Layout>
          <div>Content</div>
        </Layout>
      ),
    });

    const content = await screen.findByText(/content/i);

    expect(content).toBeInTheDocument();
  });
});
