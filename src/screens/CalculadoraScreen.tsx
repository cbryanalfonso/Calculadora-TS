import React from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import {styles} from '../theme/appTheme';
import { useCalculadora } from '../Hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {  
    calcular,
    numeroAnterior,
    numero,
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDel,
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnRestar 
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" onPress={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" onPress={positivoNegativo} />
        <BotonCalc texto="del" color="#9B9B9B" onPress={btnDel} />
        <BotonCalc texto="/" color="#FF9427" onPress={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" onPress={armarNumero} />
        <BotonCalc texto="8" onPress={armarNumero} />
        <BotonCalc texto="9" onPress={armarNumero} />
        <BotonCalc texto="X" color="#FF9427" onPress={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" onPress={armarNumero} />
        <BotonCalc texto="5" onPress={armarNumero} />
        <BotonCalc texto="6" onPress={armarNumero} />
        <BotonCalc texto="-" color="#FF9427" onPress={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" onPress={armarNumero} />
        <BotonCalc texto="2" onPress={armarNumero} />
        <BotonCalc texto="3" onPress={armarNumero} />
        <BotonCalc texto="+" color="#FF9427" onPress={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho onPress={armarNumero} />
        <BotonCalc texto="." onPress={armarNumero} />
        <BotonCalc texto="=" color="#FF9427" onPress={calcular} />
      </View>
    </View>
  );
};
