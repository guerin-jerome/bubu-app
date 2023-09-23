import React, {useContext} from 'react';
import {Button, Text} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {Budgets} from '../budgets/Budgets';
import {changeView} from '../../store/views/actions';

export const AccountView = () => {
  const {appState, dispatch} = useContext(AppContext);
  const {activeView, accounts} = appState || {};

  const accountId = parseInt(activeView?.split('-')?.[1] ?? '0', 10);
  const accountFinded = accounts.find(account => account.id === accountId);

  const handleClickRetour = () => {
    dispatch(changeView('home'));
  };

  return (
    <>
      <Button title="Retour" onPress={handleClickRetour} />
      <Text>Welcome to account named : {accountFinded?.name}</Text>
      <Text>Vos budgets :</Text>
      <Budgets accountid={accountId} />
    </>
  );
};
