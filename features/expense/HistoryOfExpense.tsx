import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import {Expense} from './expense/Expense';
import {ScrollView, StyleSheet} from 'react-native';
import {createDate} from '../../utils/date';
import {Text} from 'native-base';
import {ColorThemeStyle} from '../../constants';

const style = StyleSheet.create({
  card: {
    borderColor: ColorThemeStyle.border,
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

  const hasExpense = expenses.length > 0;

  return (
    <>
      <Text marginBottom="15px" color={ColorThemeStyle.text}>
        Historique de vos dépenses :
      </Text>
      <ScrollView style={style.card}>
        {hasExpense ? (
          expensesToDisplay.map(expense => (
            <Expense {...expense} key={expense.id} />
          ))
        ) : (
          <Text color={ColorThemeStyle.placeholder}>
            Vous n'avez pas encore de dépense.
          </Text>
        )}
      </ScrollView>
    </>
  );
};
