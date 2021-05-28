import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, ActivityIndicator, Keyboard } from 'react-native';
import { Background, Container, AreaInput, Input,
    SubmitButton, SubmitText, Logo } from '../SignIn/styles';
import { TextInputMask } from 'react-native-masked-text';   
import { AuthContext } from '../../contexts/auth';


export default function SignIn() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [zap, setZap] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

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
                    returnKeyTupe="next"
                    onSubmitEditing={ () => Keyboard.dismiss() }
                    value={nome}
                    onChangeText={ (text) => setNome(text)}
                />
            </AreaInput>

            <AreaInput>
                <TextInputMask
                    placeholder="Whatsapp"
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="numeric"
                    type={'cel-phone'}
                    options={{
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(62) '
                    }}
                    returnKeyTupe="next"
                    onSubmitEditing={ () => Keyboard.dismiss() }
                    value={zap}
                    onChangeText={ (text) => setZap(text)}  
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.20)',
                        width: '70%',
                        fontSize: 17,
                        color: '#000',
                        marginBottom: 15,
                        padding: 10
                    }}                  
                />
            </AreaInput>

            <AreaInput>
                <Input
                    placeholder="Email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyTupe="next"
                    onSubmitEditing={ () => Keyboard.dismiss() }
                    value={email}
                    onChangeText={ (text) => setEmail(text)}
                />
            </AreaInput>

            <AreaInput>
                <Input
                    placeholder="Senha"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onSubmitEditing={ () => Keyboard.dismiss() }
                    secureTextEntry={true}
                    value={password}
                    onChangeText={ (text) => setPassword(text)}
                />        
            </AreaInput>

            <SubmitButton onPress={handleSignUp}>            
                {
                    loadingAuth ? (
                    <ActivityIndicator size={20} color="#000"/>
                    ) : (
                    <SubmitText>Cadastrar</SubmitText>
                    )
                }                 
            </SubmitButton>     

        </Container>
   </Background>

   
 );
}