import React, {useContext, useState} from 'react';
import {AppContext} from '../../context/AppContext';
import {changeView} from '../../store/views/actions';
import {ArrowBackIcon, Box, Divider, IconButton, Progress} from 'native-base';
import {formatType} from '../../utils/budget';
import {BudgetService} from '../../database/services/budget/budget';
import {removeBudget} from '../../store/budget/actions';
import {BudgetForm} from './budgetForm/BudgetForm';
import {Text, Subheading, Button} from '../../components';
import {COLOR_THEME} from '../../constants';

export const BudgetView = () => {
  const {appState, dispatch} = useContext(AppContext);
  const {activeView, budgets} = appState || {};
  const [isLoading, setIsLoading] = useState(false);
  const budgetId = activeView?.slice(activeView.indexOf('.') + 1) ?? '0';
  const budgetFinded = budgets.find(budget => budget.id === budgetId);
  const {accountid, name, type, base, current} = budgetFinded ?? {};
  const budgetIndicator =
    type === 'saved' ? `${current} €` : `${current} € / ${base}€`;
  const percentConsumned =
    type === 'saved' ? 100 : (100 * (current ?? 0)) / (base ?? 0);
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
          backgroundColor={COLOR_THEME.primary}
          icon={<ArrowBackIcon color="white" />}
        />
        <Button
          disabled={isLoading}
          size="sm"
          onPress={handleClickRemove}
          variant="subtle">
          Supprimer budget
        </Button>
      </Box>
      <Text>Nom de votre budget :</Text>
      <Subheading>
        {name} - {formatType(type)}
      </Subheading>
      <Divider marginY={3} />
      <Text>Total restant :</Text>
      <Text bold fontSize="xl">
        {budgetIndicator}
      </Text>
      <Progress
        _filledTrack={{backgroundColor: COLOR_THEME.primary}}
        value={percentConsumned}
        size="md"
        marginBottom={6}
      />
      <BudgetForm budget={budgetFinded!!} />
      {/**
       * <Button marginTop={4} backgroundColor={COLOR_THEME.primary}>
        Réinitialiser
      </Button>
       */}
    </Box>
  );
};
