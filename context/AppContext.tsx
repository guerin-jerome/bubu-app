import React, {
  Context,
  PropsWithChildren,
  createContext,
  useReducer,
} from 'react';
import {TAppState} from '../types/TAppState';
import {TAppContext} from '../types/TAppContext';
import {appReducer} from '../store/appReducer';

export const initialAppState: TAppState = {
  isLogged: false,
  user: null,
  accounts: [],
  budgets: [],
  expenses: [],
};

export const AppContext: Context<TAppContext> = createContext<TAppContext>({
  appState: initialAppState,
  dispatch: () => null,
});

export const AppContextProvider = ({children}: PropsWithChildren) => {
  const [appState, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={{appState, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};
