import React, {useContext} from 'react';
import {Button, Text} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {Budgets} from '../budgets/Budgets';
import {changeView} from '../../store/views/actions';
import {AccountService} from '../../database/services/account/account';
import {removeAccount} from '../../store/account/actions';

export const AccountView = () => {
  const {appState, dispatch} = useContext(AppContext);
  const {activeView, accounts} = appState || {};

  const accountId = parseInt(activeView?.split('-')?.[1] ?? '0', 10);
  const accountFinded = accounts.find(account => account.id === accountId);

  const handleClickRetour = () => {
    dispatch(changeView('home'));
  };

  const handleClickRemove = () => {
    AccountService.remove(accountId).then(() =>
      dispatch(removeAccount(accountId)),
    );
    // TODO: traiter l'erreur
  };

  return (
    <>
      <Button title="Retour" onPress={handleClickRetour} />
      <Button title="Supprimer le compte" onPress={handleClickRemove} />
      <Text>Nom de votre compte sélectionné :</Text>
      <Text>{accountFinded?.name}</Text>
      <Text>Vos budgets :</Text>
      <Budgets accountid={accountId} />
    </>
  );
};
