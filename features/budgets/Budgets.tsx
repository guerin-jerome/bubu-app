import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import {Budget} from './budget/Budget';
import {TBudgetsProps} from '../../types/components/TBudgetsProps';
import {ColorThemeStyle} from '../../constants';
import {Text} from 'native-base';
import {Placeholder} from '../../components/Placeholder';

export const Budgets = ({accountid}: TBudgetsProps) => {
  const {appState} = useContext(AppContext);
  const {budgets} = appState || {};

  const filteredBudgets = budgets.filter(
    budget => budget.accountid === accountid,
  );

  const hasBudgets = filteredBudgets.length > 0;

  return (
    <>
      {hasBudgets ? (
        filteredBudgets.map(budget => <Budget {...budget} key={budget.id} />)
      ) : (
        <Placeholder>Vous n'avez pas encore de budgets.</Placeholder>
      )}
    </>
  );
};
