import React, {useContext} from 'react';
import {Authentication} from './features/authentication/Authentication';
import {AppContext} from './context/AppContext';
import {Home} from './features/home/Home';
import {AccountView} from './features/accounts/AccountView';
import {BudgetView} from './features/budgets/BudgetView';
import {Login} from './features/authentication/login/Login';

export const AppContainer = () => {
  const {appState} = useContext(AppContext);
  const {isLogged, activeView} = appState || {};

  if (activeView === 'login' && !isLogged) {
    return <Login />;
  }

  if (activeView === 'home' && isLogged) {
    return <Home />;
  }

  if (activeView?.includes('account.') && isLogged) {
    return <AccountView />;
  }

  if (activeView?.includes('budget.') && isLogged) {
    return <BudgetView />;
  }

  console.error('Unknown view in ViewToDisplay with activeView :', activeView);
  return null;
};
