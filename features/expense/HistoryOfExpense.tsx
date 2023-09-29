import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import {Expense} from './expense/Expense';
import {ScrollView} from 'react-native';
import {createDate} from '../../utils/date';
import {STYLE_CARDS} from '../../styles';
import {Placeholder} from '../../components/Placeholder';
import {Text} from '../../components/Text';

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

  const hasExpense = expenses.length > 0;

  return (
    <>
      <Text marginBottom="15px">Historique de vos dépenses :</Text>
      <ScrollView style={STYLE_CARDS.historyOfExpense}>
        {hasExpense ? (
          expensesToDisplay.map(expense => (
            <Expense {...expense} key={expense.id} />
          ))
        ) : (
          <Placeholder>Vous n'avez pas encore de dépense.</Placeholder>
        )}
      </ScrollView>
    </>
  );
};
