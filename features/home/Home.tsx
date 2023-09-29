import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import {logout} from '../../store/authentication/actions';
import {Accounts} from '../accounts/Accounts';
import {HistoryOfExpense} from '../expense/HistoryOfExpense';
import {Box, Button} from 'native-base';
import {Heading} from '../../components/Heading';
import {COLOR_THEME} from '../../constants';

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
        <Button
          size="sm"
          onPress={handleClickDeconnexion}
          backgroundColor={COLOR_THEME.subtle}
          _text={{color: COLOR_THEME.subtleItem}}
          variant="subtle">
          Déconnexion
        </Button>
      </Box>
      <Accounts />
      <HistoryOfExpense />
    </Box>
  );
};
