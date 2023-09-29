import React, {useContext, useState} from 'react';
import {AccountService} from '../../database/services/account/account';
import {AppContext} from '../../context/AppContext';
import {addAccount} from '../../store/account/actions';
import {Box, Button, Modal} from 'native-base';
import {COLOR_THEME} from '../../constants';
import {TAccount} from '../../types/TAccount';
import {Input, Heading, Text} from '../../components';
import uuid from 'react-native-uuid';

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
          <Heading color={COLOR_THEME.black} marginBottom={4}>
            Ajouter un compte
          </Heading>
          <Text color={COLOR_THEME.black}>Nom :</Text>
          <Input onChangeText={setAccountName} />
          <Box marginTop={3} flexDirection="row" justifyContent="space-between">
            <Button
              width="47%"
              isLoading={isLoading}
              isDisabled={isLoading}
              onPress={handleAddAccount}
              backgroundColor={COLOR_THEME.primary}>
              Ajouter
            </Button>
            <Button
              width="47%"
              isLoading={isLoading}
              isDisabled={isLoading}
              onPress={handleClose}
              backgroundColor={COLOR_THEME.subtle}
              _text={{color: COLOR_THEME.subtleItem}}>
              Fermer
            </Button>
          </Box>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
