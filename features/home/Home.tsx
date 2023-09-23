import React, {useContext} from 'react';
import {Button, Text} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {logout} from '../../store/authentication/actions';
import {Accounts} from '../accounts/Accounts';

export const Home = () => {
  const {appState, dispatch} = useContext(AppContext);
  const {user} = appState || {};
  const {name} = user ?? {};

  const handleClickDeconnexion = () => {
    dispatch(logout());
  };

  return (
    <>
      <Text>Hello {name}</Text>
      <Button title="Déconnexion" onPress={handleClickDeconnexion} />
      <Accounts />
    </>
  );
};
