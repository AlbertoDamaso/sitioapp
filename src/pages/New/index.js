import React, { useState } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { Background, Input, SubmitButton, SubmitText } from './styles';
import Header from '../../components/Header';
import Picker from '../../components/Picker';

export default function New() {
  const [brinco, setBrinco] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [sexo, setSexo] = useState('');
  const [dono, setDono] = useState('');
  const [peso, setPeso] = useState('');
  const [raca, setRaca] = useState('');
  const [desc, setDesc] = useState('');
  const [catego, setCatego] = useState('');
  const [show, setShow] = useState(false);

  function handleShowPicker(){
    setShow(true);
  }
 return (
   <TouchableWithoutFeedback onPress= { () => Keyboard.dismiss() }>
    <Background>
      <Header/>

      <SafeAreaView style={{ alignItems: 'center', marginTop: -28}}>
          <Input
            placeholder="Brinco"
            returnKeyTupe="next"
            onSubmitEditing={ () => Keyboard.dismiss() }
            value={brinco}
            onChangeText={ (text) => setBrinco(text)}
          />

          <Input
            placeholder="Data de Nascimento"
          />

          <Picker onChange={setSexo}/>  

          <Input
            placeholder="Dono"
            returnKeyTupe="next"
            onSubmitEditing={ () => Keyboard.dismiss() }
            value={dono}
            onChangeText={ (text) => setDono(text)}
          />     

          <Input
            placeholder="Peso(Kg)"
            keyboardType="numeric"
            returnKeyTupe="next"
            onSubmitEditing={ () => Keyboard.dismiss() }
            value={peso}
            onChangeText={ (text) => setPeso(text)}
          />

          <Input
            placeholder="Raça"
            returnKeyTupe="next"
            onSubmitEditing={ () => Keyboard.dismiss() }
            value={raca}
            onChangeText={ (text) => setRaca(text)}
          />      

          <Input
            placeholder="Descrição"
            returnKeyTupe="next"
            onSubmitEditing={ () => Keyboard.dismiss() }
            value={desc}
            onChangeText={ (text) => setDesc(text)}
          />

          <Input
            placeholder="Categoria"
          />                

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>       
      </SafeAreaView>
    </Background>
   </TouchableWithoutFeedback>
 );
}