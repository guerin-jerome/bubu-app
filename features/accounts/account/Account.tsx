import React, {useContext} from 'react';
import {TAccount} from '../../../types/TAccount';
import {Pressable} from 'react-native';
import {AppContext} from '../../../context/AppContext';
import {selectAccount} from '../../../store/account/actions';
import {STYLE_CARDS} from '../../../styles';
import {Text} from '../../../components/Text';

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
    <Pressable onPress={handleClickAccount} style={STYLE_CARDS.account}>
      <Text>{name}</Text>
      <Text bold fontSize="xl">
        {totalRemainingOfAccount} €
      </Text>
    </Pressable>
  );
};
