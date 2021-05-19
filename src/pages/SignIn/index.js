import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background, Container, Logo, AreaInput, Input,
   SubmitButton, SubmitText, Link, LinkText } from './styles';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  function handleLogin(){
    signIn(email, password);
  }

 return (
   <Background>
     <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled     
     >
      <Logo source={require('../../assets/sitio.png')}/>

      <AreaInput>
        <Input
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </AreaInput>

      <AreaInput>
        <Input
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
        />        
      </AreaInput>

      <SubmitButton onPress={handleLogin}>            
        <SubmitText>Entrar</SubmitText>                 
      </SubmitButton>

      <Link onPress={ () => navigation.navigate('SignUp')}>
        <LinkText>Criar uma Conta!</LinkText>
      </Link>      
     </Container>
   </Background>

   
 );
}