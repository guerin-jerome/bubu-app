import React, {useContext, useState} from 'react';
import {AuthenticationService} from '../../../database/services/authentication/authentication';
import {AppContext} from '../../../context/AppContext';
import {authenticationSucceed} from '../../../store/authentication/actions';
import {TAuthenticationSucceedPayload} from '../../../types/store/authentication/actions';
import {Box, Button, FormControl, Heading, Image, Input} from 'native-base';
import {
  ColorThemeStyle,
  LOGO_URI,
  PRIMARY_COLOR,
  SUBTLE_COLOR,
} from '../../../constants';

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
    <Box paddingTop={100} alignItems="center">
      <Image source={{uri: LOGO_URI}} size="xl" alt="logo de l'application" />
      <Heading size="md" marginBottom={10} color={ColorThemeStyle.text}>
        Bienvenue dans Bubu
      </Heading>
      <FormControl maxW="280px">
        <FormControl.Label>Email :</FormControl.Label>
        <Input
          onChangeText={text => setEmail(text)}
          marginBottom={2}
          autoComplete="email"
          focusOutlineColor={PRIMARY_COLOR}
          _focus={{
            backgroundColor: SUBTLE_COLOR,
            color: ColorThemeStyle.focus,
          }}
          color={ColorThemeStyle.text}
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
