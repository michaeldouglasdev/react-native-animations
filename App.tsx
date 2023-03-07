import React from 'react';

import { AppProvider } from './src/providers/app.provider';
import { AppRoutes } from './src/routes/app.routes';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}