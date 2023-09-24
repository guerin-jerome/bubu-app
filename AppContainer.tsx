import React, {useContext} from 'react';
import {Authentication} from './features/authentication/Authentication';
import {AppContext} from './context/AppContext';
import {Home} from './features/home/Home';
import {TViewToDisplayProps} from './types/components/TViewToDisplayProps';
import {AccountView} from './features/accounts/AccountView';
import {BudgetView} from './features/budgets/BudgetView';

const ViewToDisplay = ({activeView}: TViewToDisplayProps) => {
  if (activeView === 'home') {
    return <Home />;
  }

  if (activeView?.includes('account-')) {
    return <AccountView />;
  }

  if (activeView?.includes('budget-')) {
    return <BudgetView />;
  }

  console.error('Unknown view in ViewToDisplay with activeView :', activeView);
  return null;
};

export const AppContainer = () => {
  const {appState} = useContext(AppContext);
  const {isLogged, activeView} = appState || {};

  return isLogged ? (
    <ViewToDisplay activeView={activeView} />
  ) : (
    <Authentication />
  );
};
