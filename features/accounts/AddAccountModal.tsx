import React, {useContext, useState} from 'react';
import {AccountService} from '../../database/services/account/account';
import {AppContext} from '../../context/AppContext';
import {addAccount} from '../../store/account/actions';
import {Box, Button, Heading, Input, Modal, Text} from 'native-base';
import {PRIMARY_COLOR, SUBTLE_COLOR, SUBTLE_TEXT_COLOR} from '../../constants';

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
  const [isLoading, setIsLoading] = useState(false);

  const handleAddAccount = () => {
    setIsLoading(true);
    const newAccount = {
      id: Math.max(...accounts.map(account => account.id)) + 1,
      userid: user?.id ?? 0,
      name: accountName,
    };
    AccountService.create(newAccount)
      .then(account => {
        dispatch(addAccount(account));
        setAccountName('');
        handleClose();
      })
      .finally(() => setIsLoading(false));
    // TODO: gérer erreur
  };

  return (
    <Modal isOpen={isVisible} onClose={handleClose}>
      <Modal.Content>
        <Modal.Body>
          <Heading size="md" marginBottom={4}>
            Ajouter un compte
          </Heading>
          <Text>Nom :</Text>
          <Input
            width="100%"
            marginBottom={6}
            onChangeText={text => setAccountName(text)}
            focusOutlineColor={PRIMARY_COLOR}
            _focus={{backgroundColor: SUBTLE_COLOR}}
          />
          <Box flexDirection="row" justifyContent="space-between">
            <Button
              width="47%"
              isLoading={isLoading}
              isDisabled={isLoading}
              onPress={handleAddAccount}
              backgroundColor={PRIMARY_COLOR}>
              Ajouter
            </Button>
            <Button
              width="47%"
              isLoading={isLoading}
              isDisabled={isLoading}
              onPress={handleClose}
              backgroundColor={SUBTLE_COLOR}
              _text={{color: SUBTLE_TEXT_COLOR}}>
              Fermer
            </Button>
          </Box>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
