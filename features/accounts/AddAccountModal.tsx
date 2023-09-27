import React, {useContext, useState} from 'react';
import {AccountService} from '../../database/services/account/account';
import {AppContext} from '../../context/AppContext';
import {addAccount} from '../../store/account/actions';
import {Box, Button, Heading, Modal, Text} from 'native-base';
import {PRIMARY_COLOR, SUBTLE_COLOR, SUBTLE_ITEM_COLOR} from '../../constants';
import {TAccount} from '../../types/TAccount';
import uuid from 'react-native-uuid';
import {Input} from '../../components/Input';

type TAddAccountModalProps = {
  isVisible: boolean;
  handleClose: () => void;
};

export const AddAccountModal = ({
  isVisible,
  handleClose,
}: TAddAccountModalProps) => {
  const {appState, dispatch} = useContext(AppContext);
  const {user} = appState || {};
  const [accountName, setAccountName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddAccount = () => {
    setIsLoading(true);
    const newAccount: TAccount = {
      id: uuid.v4().toString(),
      userid: user?.id ?? '0',
      name: accountName,
    };
    AccountService.create(newAccount)
      .then(account => {
        setAccountName('');
        dispatch(addAccount(account));
        handleClose();
      })
      .catch(error => console.error(error))
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
          <Input onChangeText={setAccountName} />
          <Box marginTop={3} flexDirection="row" justifyContent="space-between">
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
              _text={{color: SUBTLE_ITEM_COLOR}}>
              Fermer
            </Button>
          </Box>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
