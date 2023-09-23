import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {logout} from '../../store/authentication/actions';

export const Home = () => {
  const {dispatch} = useContext(AppContext);

  const handleClickDeconnexion = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Text>Bienvenue dans Bubu</Text>
      <Button title="Déconnexion" onPress={handleClickDeconnexion} />
    </View>
  );
};
