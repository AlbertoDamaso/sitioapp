import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';

export default function Home() {
  const { user, signOut } = useContext(AuthContext);

 return (
   <View>
    <Text>{user && user.nome}</Text>
    <Text>{user && user.email}</Text>
    <Text>{user && user.zap}</Text>
    <Button
    title="Sair da conta"
    onPress={ () => signOut()}
    />
   </View>

   
 );
}