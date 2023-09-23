import React, {useContext, useState} from 'react';
import {Button, Modal, Text, TextInput} from 'react-native';
import {AccountService} from '../../database/services/account/account';
import {AppContext} from '../../context/AppContext';
import {addAccount} from '../../store/account/actions';

type TAddAccountModalProps = {
  isVisible: boolean;
  handleClose: () => void;
};

export const AddAccountModal = ({
  isVisible,
  handleClose,
}: TAddAccountModalProps) => {
  const {appState, dispatch} = useContext(AppContext);
  const {user, accounts} = appState || {};
  const [accountName, setAccountName] = useState('');

  const handleAddAccount = () => {
    const newAccount = {
      id: Math.max(...accounts.map(account => account.id)) + 1,
      userid: user?.id ?? 0,
      name: accountName,
    };
    AccountService.create(newAccount).then(account => {
      dispatch(addAccount(account));
      handleClose();
    });
    // TODO: gérer erreur
  };

  return (
    <Modal animationType="slide" visible={isVisible}>
      <Text>Ajouter un compte</Text>
      <Text>Nom du compte :</Text>
      <TextInput onChange={event => setAccountName(event.nativeEvent.text)} />
      <Button title="Ajouter" onPress={handleAddAccount} />
      <Button title="Fermer" onPress={handleClose} />
    </Modal>
  );
};
