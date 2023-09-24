import React, {useContext, useState} from 'react';
import {AuthenticationService} from '../../../database/services/authentication/authentication';
import {AppContext} from '../../../context/AppContext';
import {authenticationSucceed} from '../../../store/authentication/actions';
import {TAuthenticationSucceedPayload} from '../../../types/store/authentication/actions';
import {Box, Button, FormControl, Heading, Image, Input} from 'native-base';
import {PRIMARY_COLOR, SUBTLE_COLOR} from '../../../constants';

export const Login = () => {
  const {dispatch} = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    AuthenticationService.login(email).then(data => {
      setIsLoading(false);
      dispatch(authenticationSucceed(data as TAuthenticationSucceedPayload));
    });
    // TODO: gestion erreur
  };

  return (
    <Box alignItems="center">
      <Image
        source={{
          uri: 'https://i.postimg.cc/j2DsXt6B/Design-sans-titre.png',
        }}
        size="xl"
        alt="logo de l'application"
      />
      <Heading size="md" marginBottom={10}>
        Bienvenue dans Bubu
      </Heading>
      <FormControl maxW="280px">
        <FormControl.Label>Email :</FormControl.Label>
        <Input
          onChangeText={text => setEmail(text)}
          marginBottom={2}
          autoComplete="email"
          focusOutlineColor={PRIMARY_COLOR}
          _focus={{backgroundColor: SUBTLE_COLOR}}
        />
        <Button
          backgroundColor={PRIMARY_COLOR}
          onPress={handleSubmit}
          isLoading={isLoading}
          disabled={isLoading}>
          Connexion
        </Button>
      </FormControl>
    </Box>
  );
};
