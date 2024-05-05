import * as React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { createTestWrapper } from '@takamol/react-qiwa-core';

import TodoList from './TodoList';

describe('TodoList', () => {
  it('should render loading state', async () => {
    createTestWrapper({ children: <TodoList /> });

    await waitFor(() => {
      const loadingElement = screen.getByText('Loading...');
      expect(loadingElement).toBeInTheDocument();
    });
  });

  it('should render todo items', async () => {
    createTestWrapper({ children: <TodoList /> });

    await waitFor(() => {
      const todoItem1 = screen.getByText('You have 5 work permits expiring in less than 30 days.');
      expect(todoItem1).toBeInTheDocument();
    });

    const todoItem2 = screen.getByText('You have 3 employees without work permits.');
    expect(todoItem2).toBeInTheDocument();
  });
});
