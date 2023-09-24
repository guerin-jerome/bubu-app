import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import {Budget} from './budget/Budget';
import {TBudgetsProps} from '../../types/components/TBudgetsProps';
import {PLACEHOLDER_COLOR} from '../../constants';
import {Text} from 'native-base';

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
        <Text color={PLACEHOLDER_COLOR}>
          Vous n'avez pas encore de budgets.
        </Text>
      )}
    </>
  );
};
