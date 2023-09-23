import React, {useContext} from 'react';
import {TAccount} from '../../../types/TAccount';
import {Pressable, StyleSheet} from 'react-native';
import {AppContext} from '../../../context/AppContext';
import {selectAccount} from '../../../store/account/actions';
import {Text} from 'native-base';

const style = StyleSheet.create({
  card: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 200,
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
  },
});

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
    <Pressable onPress={handleClickAccount} style={style.card}>
      <Text>{name}</Text>
      <Text bold fontSize="xl">
        {totalRemainingOfAccount} €
      </Text>
    </Pressable>
  );
};
