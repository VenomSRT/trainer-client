import { createContext, useContext } from 'react';

import { HomeStore } from '../pages/home/store/homeStore';

export class RootStore {
  homeStore = new HomeStore;
}

export const RootStoreContext = createContext({} as RootStore);

export const useStoreContext = () => useContext(RootStoreContext);