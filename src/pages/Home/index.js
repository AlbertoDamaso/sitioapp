import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { Background, Container, Nome, Title, List, Area} from './styles';
import Header from '../../components/Header';

export default function Home() {
  const { user, signOut } = useContext(AuthContext);

 return (
   <Background>
    <Header/>
    <Container>
      <Nome>{user && user.nome}</Nome>
    </Container>
    <Title>Bovino</Title>
   </Background>
 );
}