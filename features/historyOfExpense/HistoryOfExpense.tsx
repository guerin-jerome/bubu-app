import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import {Expense} from './expense/Expense';
import {ScrollView, Text} from 'react-native';
import {createDate} from '../../utils/date';

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
      <Text>Historique de vos dépenses :</Text>
      <ScrollView>
        {expensesToDisplay.map(expense => (
          <Expense {...expense} key={expense.id} />
        ))}
        <Text>...</Text>
      </ScrollView>
    </>
  );
};
