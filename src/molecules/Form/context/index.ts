// context.ts
import { createContext } from 'react';
import { RdFormContextValue } from './types';

export const rdFormContext = createContext<RdFormContextValue | null>(null);
