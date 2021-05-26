import React from 'react';
import { Picker as RNPickerSelect} from '@react-native-picker/picker';
import { PickerView } from './styles';


export default function Picker({ onChange, sexo }) {
  return (
    <PickerView>
      <RNPickerSelect
      style={{
       width:'100%'
      }}
       selectedValue={sexo}
       onValueChange={ (valor) => onChange(valor) } 
      > 
        <RNPickerSelect.Item label="Selecione o sexo" value=""/>      
        <RNPickerSelect.Item label="Macho" value="macho"/>
        <RNPickerSelect.Item label="Fêmea" value="femea"/>
       </RNPickerSelect>
 
    </PickerView>
  );
 }