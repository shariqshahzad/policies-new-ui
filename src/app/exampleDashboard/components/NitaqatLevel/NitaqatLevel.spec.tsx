import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { createTestWrapper } from '@takamol/react-qiwa-core';

import NitaqatLevel from './NitaqatLevel';

describe('NitaqatLevel', () => {
  it('should fetch and display crucial informations about the Nitaqat level', async () => {
    createTestWrapper({ children: <NitaqatLevel /> });
    await waitForElementToBeRemoved(screen.queryByRole('progressbar'));

    const nitaqatLevel = await screen.findByText(/low green/i);
    const saudizationLevel = (await screen.findAllByText(/low/i)).at(1);

    expect(nitaqatLevel).toBeInTheDocument();
    expect(saudizationLevel).toBeInTheDocument();
  });
});
