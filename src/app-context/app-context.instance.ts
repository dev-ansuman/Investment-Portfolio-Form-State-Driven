import { createContext } from 'react';
import type { AppContextValue } from './app-context.types';

export const AppContext = createContext<AppContextValue | null>(null);
