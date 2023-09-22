import React, {
  Context,
  PropsWithChildren,
  createContext,
  useReducer,
} from 'react';
import {TAppState} from '../types/TAppState';
import {TAppContext} from '../types/TAppContext';

const initialState: TAppState = {
  isLogged: false,
};

const AppContext: Context<TAppContext> = createContext<TAppContext>({
  appState: initialState,
  dispatch: () => null,
});

// TODO: à enlever et mettre un vrai reducer
const appReducer = (): TAppState => initialState;

export const AppContextProvider = ({children}: PropsWithChildren) => {
  const [appState, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{appState, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};
