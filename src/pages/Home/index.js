import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Background, Container, Nome,ContainerTitle, Title, List, Area} from './styles';
import Header from '../../components/Header';
import BovinoList from '../../components/BovinoList';

export default function Home() {
  const [bovino, setBovino] = useState([
    {key: '1', brinco: 'N152', categoria: 'Vaca'},
    {key: '2', brinco: 'N252', categoria: 'Novilho'},
    {key: '3', brinco: 'N120', categoria: 'Boi'},
    {key: '4', brinco: 'N302', categoria: 'Novilha'},
  ]);

  const { user, signOut } = useContext(AuthContext);

 return (
   <Background>
    <Header/>
    <Container>
      <Nome>{user && user.nome}</Nome>
    </Container>
    <ContainerTitle>
      <Title>BRINCO</Title>
      <Title>CATEGORIA</Title>
    </ContainerTitle>
    <List
      showVerticalScrollIndicator={false}
      data={bovino}
      keyExtractor={ item => item.key}
      renderItem={ ({ item }) => ( <BovinoList data={item}/> )}
    />

   </Background>
 );
}