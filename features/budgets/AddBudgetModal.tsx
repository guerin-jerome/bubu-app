import React, {useContext, useState} from 'react';
import {AppContext} from '../../context/AppContext';
import {BudgetService} from '../../database/services/budget/budget';
import {addBudget} from '../../store/budget/actions';
import {Box, Button, Heading, Input, Modal, Radio, Text} from 'native-base';
import {PRIMARY_COLOR, SUBTLE_COLOR, SUBTLE_TEXT_COLOR} from '../../constants';

type TAddAccountModalProps = {
  isVisible: boolean;
  handleClose: () => void;
};

export const AddBudgetModal = ({
  isVisible,
  handleClose,
}: TAddAccountModalProps) => {
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
    <Modal isOpen={isVisible} onClose={handleClose}>
      <Modal.Content>
        <Modal.Body>
          <Heading size="md" marginBottom={4}>
            Ajout un budget
          </Heading>
          <Text>Nom :</Text>
          <Input
            width="100%"
            marginBottom={3}
            onChangeText={text => setBudgetName(text)}
            focusOutlineColor={PRIMARY_COLOR}
            _focus={{backgroundColor: SUBTLE_COLOR}}
          />
          <Text>Montant :</Text>
          <Input
            width="100%"
            marginBottom={3}
            onChangeText={text => setBudgetAmount(text)}
            focusOutlineColor={PRIMARY_COLOR}
            _focus={{backgroundColor: SUBTLE_COLOR}}
          />
          <Text>Type :</Text>
          <Radio.Group
            name="budgetType"
            value={type}
            onChange={event =>
              setBudgetType(event as 'variable' | 'fixed' | 'saved')
            }>
            <Radio value="variable" colorScheme="secondary">
              Variable
            </Radio>
            <Radio value="fixed" colorScheme="secondary">
              Fixe
            </Radio>
            <Radio value="saved" colorScheme="secondary">
              Épargne
            </Radio>
          </Radio.Group>
          <Box flexDirection="row" marginTop={6}>
            <Button
              onPress={handleAddBudget}
              backgroundColor={PRIMARY_COLOR}
              marginRight={4}>
              Ajouter
            </Button>
            <Button
              onPress={handleClose}
              backgroundColor={SUBTLE_COLOR}
              _text={{color: SUBTLE_TEXT_COLOR}}>
              Fermer
            </Button>
          </Box>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
