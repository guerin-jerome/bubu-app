import React, {useContext} from 'react';
import {ScrollView} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {Account} from './account/Account';

export const Accounts = () => {
  const {appState} = useContext(AppContext);
  const {accounts} = appState || {};

  return (
    <ScrollView horizontal>
      {accounts.map(account => (
        <Account {...account} key={account.id} />
      ))}
    </ScrollView>
  );
};
