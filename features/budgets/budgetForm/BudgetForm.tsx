import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import {AddIcon, Box, Button, Input, MinusIcon, Text} from 'native-base';
import {PRIMARY_COLOR, SUBTLE_COLOR} from '../../../constants';
import {TExpense} from '../../../types/TExpense';
import {AppContext} from '../../../context/AppContext';
import {TBudget} from '../../../types/TBudget';
import {createTodayDate} from '../../../utils/date';

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
  handleSubmit: (expense: TExpense) => void;
};

export const BudgetForm = ({budget, handleSubmit}: TBudgetFormProps) => {
  const {appState} = useContext(AppContext);
  const {expenses, user} = appState || {};
  const {id, accountid} = budget || {};
  const [details, setDetails] = useState('');
  const [value, setValue] = useState('');

  const handleSubmitForm = (operator: '+' | '-') => {
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
    // TODO: traitement des données
    handleSubmit(newExpense);
    setDetails('');
    setValue('');
  };

  return (
    <Box style={style.card}>
      <Text bold marginBottom={3}>
        Ajout une dépense
      </Text>
      <Text>Détails :</Text>
      <Input
        value={details}
        marginBottom={2}
        onChangeText={setDetails}
        focusOutlineColor={PRIMARY_COLOR}
        _focus={{backgroundColor: SUBTLE_COLOR}}
      />
      <Text>Montant :</Text>
      <Input
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
          backgroundColor="#00b894">
          Ajouter
        </Button>
        <Button
          leftIcon={<MinusIcon color="white" />}
          onPress={() => handleSubmitForm('-')}
          width="47%"
          backgroundColor="#d63031">
          Retirer
        </Button>
      </Box>
    </Box>
  );
};
