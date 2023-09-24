import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import {logout} from '../../store/authentication/actions';
import {Accounts} from '../accounts/Accounts';
import {HistoryOfExpense} from '../historyOfExpense/HistoryOfExpense';
import {Box, Button, Heading} from 'native-base';
import {SUBTLE_COLOR, SUBTLE_TEXT_COLOR} from '../../constants';
import {Dimensions} from 'react-native';

export const {height: screenHeight, width: screenWidth} =
  Dimensions.get('window');

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
        <Heading size="md">Bonjour {name}</Heading>
        <Button
          size="sm"
          onPress={handleClickDeconnexion}
          backgroundColor={SUBTLE_COLOR}
          _text={{color: SUBTLE_TEXT_COLOR}}
          variant="subtle">
          Déconnexion
        </Button>
      </Box>
      <Accounts />
      <HistoryOfExpense />
    </Box>
  );
};
