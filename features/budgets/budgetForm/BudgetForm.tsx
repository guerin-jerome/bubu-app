import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import {AddIcon, Box, Button, Input, MinusIcon, Text} from 'native-base';
import {PRIMARY_COLOR, SUBTLE_COLOR} from '../../../constants';
import {AppContext} from '../../../context/AppContext';
import {TBudget} from '../../../types/TBudget';
import {createTodayDate} from '../../../utils/date';
import {ExpenseService} from '../../../database/services/expense/expense';
import {addExpense} from '../../../store/expense/actions';

const style = StyleSheet.create({
  card: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

type TBudgetFormProps = {
  budget: TBudget;
};

export const BudgetForm = ({budget}: TBudgetFormProps) => {
  const {appState, dispatch} = useContext(AppContext);
  const {expenses, user} = appState || {};
  const {id, accountid, current} = budget || {};
  const [details, setDetails] = useState('');
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = (operator: '+' | '-') => {
    setIsLoading(true);
    const amount =
      operator === '+' ? parseFloat(value) : parseFloat(value) * -1;
    const newExpense = {
      id: Math.max(...expenses.map(expense => expense.id)) + 1,
      date: createTodayDate(),
      details,
      value: amount,
      budgetid: id,
      accountid: accountid,
      userid: user?.id ?? 0,
    };
    const newCurrentValueOfBudget = (current ?? 0) + newExpense.value;
    ExpenseService.create(newExpense, newCurrentValueOfBudget)
      .then(expense => {
        dispatch(addExpense({expense, newCurrentValueOfBudget}));
        setDetails('');
        setValue('');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Box style={style.card}>
      <Text bold marginBottom={3}>
        Ajout une dépense
      </Text>
      <Text>Détails :</Text>
      <Input
        isDisabled={isLoading}
        value={details}
        marginBottom={2}
        onChangeText={setDetails}
        focusOutlineColor={PRIMARY_COLOR}
        _focus={{backgroundColor: SUBTLE_COLOR}}
      />
      <Text>Montant :</Text>
      <Input
        isDisabled={isLoading}
        value={value}
        width="100%"
        marginBottom={2}
        onChangeText={setValue}
        focusOutlineColor={PRIMARY_COLOR}
        _focus={{backgroundColor: SUBTLE_COLOR}}
      />
      <Box style={style.actions} marginTop={2}>
        <Button
          leftIcon={<AddIcon color="white" />}
          onPress={() => handleSubmitForm('+')}
          width="47%"
          backgroundColor="#00b894"
          isLoading={isLoading}
          isDisabled={isLoading}>
          Ajouter
        </Button>
        <Button
          leftIcon={<MinusIcon color="white" />}
          onPress={() => handleSubmitForm('-')}
          width="47%"
          backgroundColor="#d63031"
          isLoading={isLoading}
          isDisabled={isLoading}>
          Retirer
        </Button>
      </Box>
    </Box>
  );
};
