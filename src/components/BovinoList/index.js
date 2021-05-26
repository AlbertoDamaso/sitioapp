import React from 'react';
import { Container, Itens, BrincoText, CategoText } from './styles';

export default function BovinoList({ data }) {
 return (
   <Container>
       <Itens>
          <BrincoText>
            {data.brinco}
          </BrincoText>
          <CategoText>
            {data.categoria}
          </CategoText>
           
       </Itens>

   </Container>
 );
}