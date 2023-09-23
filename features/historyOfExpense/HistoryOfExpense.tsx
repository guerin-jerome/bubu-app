import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import {Expense} from './expense/Expense';
import {ScrollView, StyleSheet} from 'react-native';
import {createDate} from '../../utils/date';
import {Text} from 'native-base';

const style = StyleSheet.create({
  card: {
    padding: 15,
    maxHeight: 350,
    width: '100%',
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 5,
  },
});

export const HistoryOfExpense = () => {
  const {appState} = useContext(AppContext);
  const {expenses} = appState || {};

  const expensesToDisplay = [...expenses];

  // Limit to 10 occurences
  expensesToDisplay.splice(9, expenses.length - 9);

  // Sort by most recent date
  expensesToDisplay.sort(
    (first, second) =>
      createDate(second.date).getTime() - createDate(first.date).getTime(),
  );

  return (
    <>
      <Text marginBottom="15px">Historique de vos dépenses :</Text>
      <ScrollView style={style.card}>
        {expensesToDisplay.map(expense => (
          <Expense {...expense} key={expense.id} />
        ))}
        <Text>...</Text>
      </ScrollView>
    </>
  );
};
