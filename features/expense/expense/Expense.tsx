import React, {useContext} from 'react';
import {TExpense} from '../../../types/TExpense';
import {StyleSheet} from 'react-native';
import {formatDate} from '../../../utils/date';
import {Box, Text} from 'native-base';
import {PLACEHOLDER_COLOR, PRIMARY_COLOR} from '../../../constants';
import {AppContext} from '../../../context/AppContext';

const style = StyleSheet.create({
  card: {
    flexDirection: 'row',
  },
  infos: {
    alignSelf: 'center',
    marginBottom: 8,
  },
  point: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: PRIMARY_COLOR,
    marginRight: 8,
    marginTop: 7,
  },
});

export const Expense = ({
  accountid,
  budgetid,
  details,
  date,
  value,
}: TExpense) => {
  const {appState} = useContext(AppContext);
  const {accounts, budgets} = appState || {};

  const accountFinded = accounts.find(account => account.id === accountid);
  const budgetFinded = budgets.find(budget => budget.id === budgetid);

  return (
    <Box style={style.card}>
      <Box style={style.point} />
      <Box style={style.infos}>
        <Text>
          {formatDate(date)} - {details}
        </Text>
        <Text color={PLACEHOLDER_COLOR}>
          Compte : {accountFinded?.name} | Budget : {budgetFinded?.name}
        </Text>
        <Text bold fontSize="md">
          {value} €
        </Text>
      </Box>
    </Box>
  );
};
