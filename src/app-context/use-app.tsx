import { useContext } from 'react';
import { AppContext } from './app-context.instance';
import type { AppContextValue } from './app-context.types';

export const useApp = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used inside AppProvider');
  }
  return context;
};
