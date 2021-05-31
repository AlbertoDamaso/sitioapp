import React, { useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Background, Container, Nome,ContainerTitle, Title, List} from './styles';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import BovinoList from '../../components/BovinoList';

export default function Home() {
  const [bovino, setBovino] = useState([]);
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(()=>{
      async function loadList(){
        await firebase.database().ref('bovinos')
        .child(uid).orderByChild('date')
        .on('value', (snapshot)=>{
          setBovino([]);
  
          snapshot.forEach((childItem) =>{
            let list = {
              key: childItem.key,
              brinco: childItem.val().brinco,
              catego: childItem.val().catego,
            };
  
            setBovino(oldArray => [...oldArray, list].reverse());
          })
        })
      }
      loadList();
  }, []);

  // function newCatego(){
  //   //Pegando data do item:
  //   const [diaItem, mesItem, anoItem] = data.dataNasc.split('/');
  //   const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`);

  //   //Pegando data hoje:
  //   const formatDiaHoje = format(new Date(), 'dd-MM-yyyy');
  //   const [diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
  //   const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`);

  //   const diff = Math.abs(dateItem - dateHoje);
  //   const dias = Math.ceil(diff/ (1000 * 60 * 60 * 24));

  //   if(dias < 730 && sexo === 'macho'){
  //     catego = 'Novilho'  
  //     return;  
  //   }
  //   if(dias < 730 && sexo === 'femea'){
  //     catego = 'Novilha'
  //     return;
  //   }
  //   if(dias >= 730 && sexo === 'macho'){
  //     catego = 'Boi'
  //     return;
  //   }
  //   if(dias >= 730 && sexo === 'femea'){
  //     catego = 'Vaca'
  //     return;
  //   }
  //}

  function handleDelete(data){
    Alert.alert(
      'Cuidado Atenção!',
      `Você deseja excluir ${data.brinco}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )
  }

  async function handleDeleteSuccess(data){
    await firebase.database().ref('bovinos')
      .child(uid).child(data.key).remove()
  }



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
      renderItem={ ({ item }) => ( <BovinoList newCatego data={item} deleteItem={handleDelete}/> )}
    />

   </Background>
 );
}