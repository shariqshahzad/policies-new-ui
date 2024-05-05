import * as React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { createTestWrapper } from '@takamol/react-qiwa-core';
import { useWindowUtils } from '@takamol/qiwa-design-system/utils';

import Employees from './Employees';

jest.mock('@takamol/qiwa-design-system/utils');

describe('Employees', () => {
  it('should render employees section with correct data', async () => {
    const useMockWindowUtils = useWindowUtils as jest.MockedFunction<typeof useWindowUtils>;

    useMockWindowUtils.mockImplementation(
      jest.fn(() => ({
        isMobileWidth: false,
        isTabletWidth: false,
        isSmallDesktopWidth: false,
        isRtl: false,
        isCustomWidth: false,
      })),
    );

    createTestWrapper({ children: <Employees /> });

    await waitFor(() => {
      const heading = screen.getByText('EXAMPLE_DASHBOARD.EMPLOYEES');
      expect(heading).toBeInTheDocument();
    });
  });

  it('should display "Manage Employees" link on desktop', async () => {
    const useMockWindowUtils = useWindowUtils as jest.MockedFunction<typeof useWindowUtils>;
    useMockWindowUtils.mockImplementation(
      jest.fn(() => ({
        isMobileWidth: false,
        isTabletWidth: false,
        isSmallDesktopWidth: false,
        isRtl: false,
        isCustomWidth: false,
      })),
    );

    createTestWrapper({ children: <Employees /> });

    await waitFor(() => {
      const manageEmployeesLink = screen.getByRole('button', { name: 'EXAMPLE_DASHBOARD.MANAGE_EMPLOYEES' });
      expect(manageEmployeesLink).toBeInTheDocument();
    });
  });

  it('should display "Manage Employees" link on mobile', async () => {
    const useMockWindowUtils = useWindowUtils as jest.MockedFunction<typeof useWindowUtils>;
    useMockWindowUtils.mockImplementation(
      jest.fn(() => ({
        isMobileWidth: true,
        isTabletWidth: false,
        isSmallDesktopWidth: false,
        isRtl: false,
        isCustomWidth: false,
      })),
    );

    createTestWrapper({ children: <Employees /> });

    await waitFor(() => {
      const manageEmployeesLink = screen.getByRole('button', { name: 'EXAMPLE_DASHBOARD.MANAGE_EMPLOYEES' });
      expect(manageEmployeesLink).toBeInTheDocument();
    });
  });
});
