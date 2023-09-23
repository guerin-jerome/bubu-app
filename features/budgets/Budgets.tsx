import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import {Budget} from './budget/Budget';
import {TBudgetsProps} from '../../types/components/TBudgetsProps';

export const Budgets = ({accountid}: TBudgetsProps) => {
  const {appState} = useContext(AppContext);
  const {budgets} = appState || {};

  const filteredBudgets = budgets.filter(
    budget => budget.accountid === accountid,
  );

  return (
    <>
      {filteredBudgets.map(budget => (
        <Budget {...budget} key={budget.id} />
      ))}
    </>
  );
};
