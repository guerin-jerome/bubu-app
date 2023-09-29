import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {Account} from './account/Account';
import {AddAccountModal} from './AddAccountModal';
import {AddIcon, Box, IconButton} from 'native-base';
import {Text, Placeholder} from '../../components';
import {COLOR_THEME} from '../../constants';

const style = StyleSheet.create({
  scrollingList: {
    paddingBottom: 15,
  },
});

export const Accounts = () => {
  const {appState} = useContext(AppContext);
  const {accounts} = appState || {};
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hasAccounts = accounts.length > 0;

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Box
        marginTop="30px"
        marginBottom="15px"
        flex={1}
        flexDir="row"
        justifyContent="space-between"
        alignItems="center">
        <Text>Vos comptes :</Text>
        <IconButton
          onPress={handleOpenModal}
          size="sm"
          backgroundColor={COLOR_THEME.primary}
          icon={<AddIcon color="white" />}
        />
      </Box>
      {hasAccounts ? (
        <ScrollView horizontal style={style.scrollingList}>
          {accounts.map(account => (
            <Account {...account} key={account.id} />
          ))}
        </ScrollView>
      ) : (
        <Placeholder paddingBottom={15}>
          Vous n'avez pas encore de compte.
        </Placeholder>
      )}
      <AddAccountModal
        isVisible={isModalVisible}
        handleClose={handleCloseModal}
      />
    </>
  );
};
