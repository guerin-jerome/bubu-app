import React, {useContext} from 'react';
import {TExpense} from '../../../types/TExpense';
import {StyleSheet} from 'react-native';
import {formatDate} from '../../../utils/date';
import {Box} from 'native-base';
import {AppContext} from '../../../context/AppContext';
import {Placeholder, Text} from '../../../components';
import {COLOR_THEME} from '../../../constants';

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
    backgroundColor: COLOR_THEME.primary,
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
        <Placeholder>
          Compte : {accountFinded?.name} | Budget : {budgetFinded?.name}
        </Placeholder>
        <Text bold fontSize="md">
          {value} €
        </Text>
      </Box>
    </Box>
  );
};
