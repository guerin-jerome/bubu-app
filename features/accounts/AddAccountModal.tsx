import React, {useContext, useState} from 'react';
import {Modal, StyleSheet} from 'react-native';
import {AccountService} from '../../database/services/account/account';
import {AppContext} from '../../context/AppContext';
import {addAccount} from '../../store/account/actions';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Button, Heading, Input, Text} from 'native-base';
import {PRIMARY_COLOR, SUBTLE_COLOR, SUBTLE_TEXT_COLOR} from '../../constants';

type TAddAccountModalProps = {
  isVisible: boolean;
  handleClose: () => void;
};

const style = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
  },
});

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
      <SafeAreaView style={style.modalContainer}>
        <Heading size="md" marginTop={50}>
          Ajouter un compte
        </Heading>
        <Text marginTop={15}>Nom du compte :</Text>
        <Input
          onChangeText={text => setAccountName(text)}
          marginBottom={5}
          marginX={10}
        />
        <Box style={style.actions}>
          <Button
            onPress={handleAddAccount}
            backgroundColor={PRIMARY_COLOR}
            marginRight={4}>
            Ajouter
          </Button>
          <Button
            onPress={handleClose}
            size="sm"
            backgroundColor={SUBTLE_COLOR}
            _text={{color: SUBTLE_TEXT_COLOR}}
            variant="subtle">
            Fermer
          </Button>
        </Box>
      </SafeAreaView>
    </Modal>
  );
};
