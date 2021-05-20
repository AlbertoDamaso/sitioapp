import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { Background, Container, AreaInput, Input,
   SubmitButton, SubmitText, Logo } from '../SignIn/styles';

export default function SignIn() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [zap, setZap] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, nome, zap);
  }

 return (
   <Background>
        <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled     
        >
            <Logo source={require('../../assets/Logo.png')} style={{marginTop:50, width:185, height: 80}}/>

            <AreaInput>
                <Input
                    placeholder="Nome"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={nome}
                    onChangeText={ (text) => setNome(text)}
                />
            </AreaInput>

            <AreaInput>
                <Input
                    placeholder="Whatsapp"
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="phone-pad"
                    value={zap}
                    onChangeText={ (text) => setZap(text)}                    
                />
{/* <TextInputMask
  onChangeText={(formatted, extracted) => {
    console.log(formatted) // +1 (123) 456-78-90
    console.log(extracted) // 1234567890
  }}
  mask={"+1 ([000]) [000] [00] [00]"}
/>                 */}
            </AreaInput>

            <AreaInput>
                <Input
                    placeholder="Email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={ (text) => setEmail(text)}
                />
            </AreaInput>

            <AreaInput>
                <Input
                    placeholder="Senha"
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={ (text) => setPassword(text)}
                />        
            </AreaInput>

            <SubmitButton onPress={handleSignUp}>            
                <SubmitText>Cadastrar</SubmitText>                 
            </SubmitButton>     

        </Container>
   </Background>

   
 );
}