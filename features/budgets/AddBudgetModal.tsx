import React, {useContext, useState} from 'react';
import {Button, Modal, Text, TextInput} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {BudgetService} from '../../database/services/budget/budget';
import {addBudget} from '../../store/budget/actions';

type TAddAccountModalProps = {
  isVisible: boolean;
  handleClose: () => void;
};

export const AddBudgetModal = ({
  isVisible,
  handleClose,
}: TAddAccountModalProps) => {
  // TODO: revoir ici pour mettre un RADIO button pour le type
  const {appState, dispatch} = useContext(AppContext);
  const {user, budgets, activeView} = appState || {};
  const [name, setBudgetName] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');
  const [type, setBudgetType] = useState<'saved' | 'variable' | 'fixed'>(
    'variable',
  );

  const handleAddBudget = () => {
    const newBudget = {
      id: Math.max(...budgets.map(budget => budget.id)) + 1,
      accountid: parseInt(activeView?.split('-')?.[1] ?? '0', 10),
      userid: user?.id ?? 0,
      name,
      type,
      base: parseFloat(budgetAmount),
      current: parseFloat(budgetAmount),
    };
    BudgetService.create(newBudget).then(budget => {
      dispatch(addBudget(budget));
      handleClose();
    });
    // TODO: gérer erreur
  };

  return (
    <Modal animationType="slide" visible={isVisible}>
      <Text>Ajouter un budget</Text>
      <Text>Nom :</Text>
      <TextInput onChange={event => setBudgetName(event.nativeEvent.text)} />
      <Text>Montant :</Text>
      <TextInput onChange={event => setBudgetAmount(event.nativeEvent.text)} />
      <Text>Type :</Text>
      <TextInput
        onChange={() => {
          /** TODO */
        }}
      />
      <Button title="Ajouter" onPress={handleAddBudget} />
      <Button title="Fermer" onPress={handleClose} />
    </Modal>
  );
};
