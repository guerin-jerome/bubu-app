import React, {useContext} from 'react';
import {TAccount} from '../../../types/TAccount';
import {Pressable} from 'react-native';
import {AppContext} from '../../../context/AppContext';
import {selectAccount} from '../../../store/account/actions';
import {Text} from 'native-base';
import {ColorThemeStyle} from '../../../constants';
import {STYLE_CARDS} from '../../../styles';

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
      <Text color={ColorThemeStyle.text}>{name}</Text>
      <Text bold fontSize="xl" color={ColorThemeStyle.text}>
        {totalRemainingOfAccount} €
      </Text>
    </Pressable>
  );
};
