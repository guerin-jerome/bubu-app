import React, {useContext, useState} from 'react';
import {AppContext} from '../../context/AppContext';
import {changeView} from '../../store/views/actions';
import {
  ArrowBackIcon,
  Box,
  Button,
  Divider,
  Heading,
  IconButton,
  Progress,
  Text,
} from 'native-base';
import {PRIMARY_COLOR, SUBTLE_COLOR, SUBTLE_TEXT_COLOR} from '../../constants';
import {formatType} from '../../utils/budget';
import {BudgetService} from '../../database/services/budget/budget';
import {removeBudget} from '../../store/budget/actions';
import {BudgetForm} from './budgetForm/BudgetForm';

export const BudgetView = () => {
  const {appState, dispatch} = useContext(AppContext);
  const {activeView, budgets} = appState || {};
  const [isLoading, setIsLoading] = useState(false);
  const budgetId = activeView?.slice(activeView.indexOf('.') + 1) ?? '0';
  const budgetFinded = budgets.find(budget => budget.id === budgetId);
  const {accountid, name, type, base, current} = budgetFinded ?? {};

  const handleClickRetour = () => {
    dispatch(changeView(`account.${accountid}`));
  };

  const handleClickRemove = () => {
    setIsLoading(true);
    BudgetService.remove(budgetId)
      .then(() => dispatch(removeBudget(budgetFinded!!)))
      .finally(() => setIsLoading(false));
    // TODO: traiter l'erreur
  };

  return (
    <Box padding="20px">
      <Box
        marginBottom="20px"
        flex={1}
        flexDir="row"
        justifyContent="space-between"
        alignItems="center">
        <IconButton
          onPress={handleClickRetour}
          size="sm"
          backgroundColor={PRIMARY_COLOR}
          icon={<ArrowBackIcon color="white" />}
        />
        <Button
          isLoading={isLoading}
          isDisabled={isLoading}
          size="sm"
          onPress={handleClickRemove}
          backgroundColor={SUBTLE_COLOR}
          _text={{color: SUBTLE_TEXT_COLOR}}
          variant="subtle">
          Supprimer budget
        </Button>
      </Box>
      <Text>Nom de votre budget :</Text>
      <Heading size="sm">
        {name} - {formatType(type)}
      </Heading>
      <Divider marginY={3} />
      <Text>Total restant :</Text>
      <Text bold fontSize="xl">
        {current}€ / {base}€
      </Text>
      <Progress
        _filledTrack={{backgroundColor: PRIMARY_COLOR}}
        value={(100 * (current ?? 0)) / (base ?? 0)}
        size="md"
        marginBottom={6}
      />
      <BudgetForm budget={budgetFinded!!} />
      <Button marginTop={4} backgroundColor={PRIMARY_COLOR}>
        Réinitialiser
      </Button>
    </Box>
  );
};
