import React, {useContext, useState} from 'react';
import {AppContext} from '../../context/AppContext';
import {Budgets} from '../budgets/Budgets';
import {changeView} from '../../store/views/actions';
import {AccountService} from '../../database/services/account/account';
import {removeAccount} from '../../store/account/actions';
import {AddBudgetModal} from '../budgets/AddBudgetModal';
import {
  AddIcon,
  ArrowBackIcon,
  Box,
  Button,
  Divider,
  Heading,
  IconButton,
  Text,
} from 'native-base';
import {PRIMARY_COLOR, SUBTLE_COLOR, SUBTLE_TEXT_COLOR} from '../../constants';

export const AccountView = () => {
  const {appState, dispatch} = useContext(AppContext);
  const {activeView, accounts} = appState || {};
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const accountId = parseInt(activeView?.split('-')?.[1] ?? '0', 10);
  const accountFinded = accounts.find(account => account.id === accountId);

  const handleClickRetour = () => {
    dispatch(changeView('home'));
  };

  const handleClickRemove = () => {
    setIsLoading(true);
    AccountService.remove(accountId)
      .then(() => dispatch(removeAccount(accountId)))
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
          size="sm"
          onPress={handleClickRemove}
          backgroundColor={SUBTLE_COLOR}
          _text={{color: SUBTLE_TEXT_COLOR}}
          variant="subtle"
          isLoading={isLoading}
          isDisabled={isLoading}>
          Supprimer compte
        </Button>
      </Box>
      <Text>Nom de votre compte :</Text>
      <Heading size="sm">{accountFinded?.name}</Heading>
      <Divider marginY={3} />
      <Box
        marginBottom="20px"
        flex={1}
        flexDir="row"
        justifyContent="space-between"
        alignItems="center">
        <Text>Vos budgets :</Text>
        <IconButton
          onPress={handleOpenModal}
          size="sm"
          backgroundColor={PRIMARY_COLOR}
          icon={<AddIcon color="white" />}
        />
      </Box>
      <Budgets accountid={accountId} />
      <AddBudgetModal
        isVisible={isModalVisible}
        handleClose={handleCloseModal}
      />
    </Box>
  );
};
