import React, {useContext} from 'react';
import {TAccount} from '../../../types/TAccount';
import {Pressable, Text} from 'react-native';
import {AppContext} from '../../../context/AppContext';
import {selectAccount} from '../../../store/account/actions';

export const Account = ({id, name}: TAccount) => {
  const {appState, dispatch} = useContext(AppContext);
  const {budgets} = appState || {};

  const totalRemainingOfAccount = budgets
    .filter(budget => budget.accountid === id)
    .map(budget => budget.current)
    .reduce((prev, current) => prev + current, 0);

  const handleClickAccount = () => {
    dispatch(selectAccount({accountid: id}));
  };

  return (
    <Pressable onPress={handleClickAccount}>
      <Text>{name}</Text>
      <Text>{totalRemainingOfAccount} €</Text>
    </Pressable>
  );
};
