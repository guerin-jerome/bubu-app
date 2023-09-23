import React, {useContext, useState} from 'react';
import {Button, Text, TextInput} from 'react-native';
import {AuthenticationService} from '../../../database/services/authentication/authentication';
import {AppContext} from '../../../context/AppContext';
import {authenticationSucceed} from '../../../store/authentication/actions';
import {TAuthenticationSucceedPayload} from '../../../types/store/authentication/actions';

export const Login = () => {
  const {dispatch} = useContext(AppContext);
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    AuthenticationService.login(email).then(data =>
      dispatch(authenticationSucceed(data as TAuthenticationSucceedPayload)),
    );
    // TODO: gestion erreur
  };

  return (
    <>
      <Text>Bienvenue dans Bubu</Text>
      <Text>Email :</Text>
      <TextInput onChange={event => setEmail(event.nativeEvent.text)} />
      <Button title="Connexion" onPress={handleSubmit} />
    </>
  );
};
