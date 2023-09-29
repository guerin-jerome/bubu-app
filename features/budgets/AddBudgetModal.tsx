import React, {useContext, useState} from 'react';
import {AppContext} from '../../context/AppContext';
import {BudgetService} from '../../database/services/budget/budget';
import {addBudget} from '../../store/budget/actions';
import {Box, Button, Modal, Radio} from 'native-base';
import {COLOR_THEME} from '../../constants';
import uuid from 'react-native-uuid';
import {TBudget} from '../../types/TBudget';
import {Input} from '../../components/Input';
import {Text} from '../../components/Text';
import {Heading} from '../../components/Heading';

type TAddAccountModalProps = {
  isVisible: boolean;
  handleClose: () => void;
};

export const AddBudgetModal = ({
  isVisible,
  handleClose,
}: TAddAccountModalProps) => {
  const {appState, dispatch} = useContext(AppContext);
  const {user, activeView} = appState || {};
  const [name, setBudgetName] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [type, setBudgetType] = useState<'saved' | 'variable' | 'fixed'>(
    'variable',
  );

  const handleAddBudget = () => {
    setIsLoading(true);
    const newBudget: TBudget = {
      id: uuid.v4().toString(),
      accountid: activeView?.slice(activeView.indexOf('.') + 1) ?? '0',
      userid: user?.id ?? '0',
      name,
      type,
      base: parseFloat(budgetAmount),
      current: parseFloat(budgetAmount),
    };
    BudgetService.create(newBudget)
      .then(budget => {
        dispatch(addBudget(budget));
        handleClose();
      })
      .finally(() => setIsLoading(false));
    // TODO: gérer erreur
  };

  return (
    <Modal isOpen={isVisible} onClose={handleClose}>
      <Modal.Content>
        <Modal.Body>
          <Heading color={COLOR_THEME.black} marginBottom={4}>
            Ajouter un budget
          </Heading>
          <Text color={COLOR_THEME.black}>Nom :</Text>
          <Input onChangeText={setBudgetName} />
          <Text color={COLOR_THEME.black}>Montant :</Text>
          <Input onChangeText={setBudgetAmount} />
          <Text color={COLOR_THEME.black}>Type :</Text>
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
          <Box flexDirection="row" justifyContent="space-between" marginTop={6}>
            <Button
              width="47%"
              isLoading={isLoading}
              isDisabled={isLoading}
              onPress={handleAddBudget}
              backgroundColor={COLOR_THEME.primary}>
              Ajouter
            </Button>
            <Button
              width="47%"
              isLoading={isLoading}
              isDisabled={isLoading}
              onPress={handleClose}
              backgroundColor={COLOR_THEME.subtle}
              _text={{color: COLOR_THEME.subtleItem}}>
              Fermer
            </Button>
          </Box>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
