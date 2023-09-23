import React from 'react';
import {useContext} from 'react';
import {Authentication} from './features/authentication/Authentication';
import {AppContext} from './context/AppContext';
import {Home} from './features/home/Home';

export const AppContainer = () => {
  const {appState} = useContext(AppContext);
  const {isLogged} = appState || {};

  return isLogged ? <Home /> : <Authentication />;
};
