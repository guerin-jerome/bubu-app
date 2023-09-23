import React, {useContext} from 'react';
import {TAccount} from '../../../types/TAccount';
import {Text} from 'react-native';
import {AppContext} from '../../../context/AppContext';

export const Account = ({id, name}: TAccount) => {
  const {appState} = useContext(AppContext);
  const {budgets} = appState || {};

  const totalRemainingOfAccount = budgets
    .filter(budget => budget.accountid === id)
    .map(budget => budget.current)
    .reduce((prev, current) => prev + current, 0);

  return (
    <>
      <Text>{name}</Text>
      <Text>{totalRemainingOfAccount} €</Text>
    </>
  );
};
