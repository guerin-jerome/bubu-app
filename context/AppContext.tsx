import React, {
  Context,
  PropsWithChildren,
  createContext,
  useReducer,
} from 'react';
import {TAppState} from '../types/TAppState';
import {TAppContext} from '../types/TAppContext';
import {appReducer} from '../store/appReducer';

const initialState: TAppState = {
  isLogged: false,
};

const AppContext: Context<TAppContext> = createContext<TAppContext>({
  appState: initialState,
  dispatch: () => null,
});

export const AppContextProvider = ({children}: PropsWithChildren) => {
  const [appState, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{appState, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};
