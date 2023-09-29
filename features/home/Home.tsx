import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import {logout} from '../../store/authentication/actions';
import {Accounts} from '../accounts/Accounts';
import {HistoryOfExpense} from '../expense/HistoryOfExpense';
import {Box} from 'native-base';
import {Heading, Button} from '../../components';

export const Home = () => {
  const {appState, dispatch} = useContext(AppContext);
  const {user} = appState || {};
  const {name} = user ?? {};

  const handleClickDeconnexion = () => {
    dispatch(logout());
  };

  return (
    <Box padding="20px">
      <Box
        flex={1}
        flexDir="row"
        justifyContent="space-between"
        alignItems="center">
        <Heading>Bonjour {name}</Heading>
        <Button size="sm" variant="subtle" onPress={handleClickDeconnexion}>
          Déconnexion
        </Button>
      </Box>
      <Accounts />
      <HistoryOfExpense />
    </Box>
  );
};
