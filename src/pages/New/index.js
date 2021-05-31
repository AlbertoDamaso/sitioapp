import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { Background, Input, SubmitButton, SubmitText, Area } from './styles';
import { format } from 'date-fns';
import DatePicker from 'react-native-datepicker';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import Picker from '../../components/Picker';


export default function New() {
  const navigation = useNavigation();
  const { user: usuario } = useContext(AuthContext);

  const [brinco, setBrinco] = useState('');
  const [dataNasc, setDataNasc] = useState(new Date());
  const [sexo, setSexo] = useState('');
  const [dono, setDono] = useState('');
  const [peso, setPeso] = useState('');
  const [raca, setRaca] = useState('');
  const [desc, setDesc] = useState('');
  const [catego, setCatego] = useState('');

  
  function handelSubmit(){
    Keyboard.dismiss();
    if(brinco === '' || dataNasc === '' || sexo === '' || dono === ''){
      alert('Peencha os campos necessários!')
      return
    }
    Alert.alert(
      'Confirmando dados',
      `Brinco: ${brinco} - DataN: ${dataNasc} - Sexo: ${sexo} - Dono: ${dono}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text:'Continuar',
          onPress:() => handleAdd()
        }
      ]
    )
  }

  async function handleAdd(){
    let uid = usuario.uid;
    let key = await firebase.database().ref('bovinos').child(uid).push().key;
    await firebase.database().ref('bovinos').child(uid).child(key).set({
      brinco: brinco,
      dataNasc: dataNasc,
      sexo: sexo,
      dono: dono,
      peso: parseFloat(peso),
      raca: raca,
      desc: desc,
      catego: catego,
    })
    Keyboard.dismiss();
    setBrinco('');
    setDataNasc('');
    setSexo('');
    setDono('');
    setPeso('');
    setRaca('');
    setDesc('');
    setCatego('');
    navigation.navigate('Home');
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

          <Area>
            <DatePicker
              style={{
                height: 50,
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                top: 11,
                marginBottom: 11,
                paddingLeft: 19,                
                backgroundColor: 'rgba(0,0,0,0.20)',
              }}
              date={dataNasc}
              display="default"
              mode="date"
              placeholder="Selecione a data de nascimento"
              format="DD/MM/YYYY"
              minDate="01-05-2016"
              maxDate="01-05-2050"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  alignItems: 'flex-start',
                  marginTop: 11,
                  borderWidth: 0,
                },
                placeholderText: {
                  color: '#222',
                  fontSize: 17,
                }
              }} 
              onDateChange={(date) => setDataNasc(date)}    
            />    
          </Area>

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
            returnKeyTupe="next"
            onSubmitEditing={ () => Keyboard.dismiss() }
            value={catego}
            onChangeText={ (text) => setDesc(text)}
          />  

          <SubmitButton onPress={handelSubmit}> 
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
                       
      </SafeAreaView>
    </Background>
   </TouchableWithoutFeedback>
 );
}