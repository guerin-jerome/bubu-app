import React, {useContext, useState} from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {Account} from './account/Account';
import {AddAccountModal} from './AddAccountModal';

export const Accounts = () => {
  const {appState} = useContext(AppContext);
  const {accounts} = appState || {};
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Text>Vos comptes :</Text>
      <Button title="Ajouter un compte" onPress={handleOpenModal} />
      <ScrollView horizontal>
        {accounts.map(account => (
          <Account {...account} key={account.id} />
        ))}
      </ScrollView>
      <AddAccountModal
        isVisible={isModalVisible}
        handleClose={handleCloseModal}
      />
    </>
  );
};
