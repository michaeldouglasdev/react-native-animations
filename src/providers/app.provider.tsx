import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

interface AppProviderProps {
  children: React.ReactNode;
}
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}