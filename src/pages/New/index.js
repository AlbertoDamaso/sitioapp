import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Alert,Text } from 'react-native';
import { Background, Input, SubmitButton, SubmitText, InputData, Area } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import Picker from '../../components/Picker';
import DatePicker from '../../components/DatePicker';


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
  
  const [show, setShow] = useState(false);

  function newCatego(){
        //Pegando data do item:
        const formatDiaEscolhido = format((dataNasc), 'dd/MM/yyyy')
        const [diaItem, mesItem, anoItem] = formatDiaEscolhido.split('/');
        const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`);
    
        //Pegando data hoje:
        const formatDiaHoje = format(new Date(), 'dd/MM/yyyy');
        const [diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
        const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`);

        const diff = Math.abs(dateItem - dateHoje);
        const dias = Math.ceil(diff/ (1000 * 60 * 60 * 24));
        console.log(dias)
  }

  function handleShowPicker(){
    setShow(true);
  }

  function handleClose(){
    setShow(false);
  }

  const onChange = (date) => {
    setShow(Platform.OS === 'ios');
    setDataNasc(date);
    console.log(date);
  } 

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
      dataNasc: format((dataNasc), 'dd/MM/yyyy'),
      sexo: sexo,
      dono: dono,
      peso: parseFloat(peso),
      raca: raca,
      desc: desc,
      catego: catego
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
            <InputData
              placeholder="Data de Nascimento"
              returnKeyTupe="next"
              onSubmitEditing={ () => Keyboard.dismiss() } 
              keyboardType="numeric"
              editable={false}
              
            />  
            <TouchableOpacity onPress={handleShowPicker}>
              <Icon name="event" color="#000" size={45} 
                style={{
                  backgroundColor:'rgba(0,0,0,0.20)',
                  width: 60,
                  height: 50,
                  marginTop: 11,
                  paddingTop: 3,
                  paddingLeft: 8                
                  }} 
                />
            </TouchableOpacity>  
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
            onChangeText={ (text) => setCatego(text)}
          />                

          <SubmitButton onPress={handelSubmit}> 
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>

          {show && (
            <DatePicker
            onClose={handleClose}
            date={dataNasc}
            onChange={onChange}
            />
          )}                 
      </SafeAreaView>
    </Background>
   </TouchableWithoutFeedback>
 );
}