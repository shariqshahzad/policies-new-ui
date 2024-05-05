import React from 'react';
import { screen } from '@testing-library/react';
import { createTestWrapper } from '@takamol/react-qiwa-core';

import { Compliance } from '.';

describe('Compliance', () => {
  it('should render score once api is successfully fetched', async () => {
    createTestWrapper({ children: <Compliance /> });

    const complianceScore = await screen.findByText(/high/i, undefined, { timeout: 5000 });

    expect(complianceScore).toBeVisible();
  });
});
