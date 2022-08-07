import { createContext } from 'react';

export interface Store {
  editor: 'Text' | 'Vim' | 'Emacs';
  volume: number;
}

export const intialStore: Store = {
  editor: 'Text',
  volume: 70,
};

export const GlobalContext = createContext(undefined as unknown as Store);
