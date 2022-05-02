import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  onPress: ( numeroTexto: string ) => void;
}

const BotonCalc = ({texto, color, ancho = false , onPress}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(texto)}>
      <View
        style={[
          styles.boton,
          color ? {backgroundColor: color} : null,
          ancho ? {width: 180} : {width: 80},
        ]}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;
