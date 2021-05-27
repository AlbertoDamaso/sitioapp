import React from 'react';
import { TouchableWithoutFeedback as TWF } from 'react-native';
import { Container, Itens, BrincoText, CategoText } from './styles';

export default function BovinoList({ data, deleteItem }) {
 return (
   <TWF onLongPress={ () => deleteItem(data)}>
    <Container>
        <Itens>
            <BrincoText>
              {data.brinco}
            </BrincoText>
            <CategoText>
              {data.catego}
            </CategoText>
        </Itens>
    </Container>
   </TWF>
 );
}