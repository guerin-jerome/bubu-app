import React from 'react';
import {Button, Modal, Text, TextInput} from 'react-native';

type TAddAccountModalProps = {
  isVisible: boolean;
  handleClose: () => void;
};

export const AddAccountModal = ({
  isVisible,
  handleClose,
}: TAddAccountModalProps) => {
  const handleAddAccount = () => {
    handleClose();
  };

  return (
    <Modal animationType="slide" visible={isVisible}>
      <Text>Ajouter un compte</Text>
      <Text>Nom du compte :</Text>
      <TextInput />
      <Button title="Ajouter" onPress={handleAddAccount} />
      <Button title="Fermer" onPress={handleClose} />
    </Modal>
  );
};
