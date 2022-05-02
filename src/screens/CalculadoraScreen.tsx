import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    // verificar  si existe un punto dencimal.
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
        // evaluar si es otro cero y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
        //evaluar si es diferente de 0 y no tiene un punto .
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
       // evitar 000000.0
      }else if( numeroTexto==='0' && !numero.includes('.')){
        setNumero(numero)
      }else{
          setNumero(numero+numeroTexto)
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDel = ()=>{
    let negativo = ''
    let numeroTemp = numero
    if(numero.includes('-')){
        negativo='-'
        numeroTemp= numero.substring(1)
    }
    if(numeroTemp.length > 1){
        setNumero(negativo + numeroTemp.slice(0,-1))
    }else{
        setNumero('0')
    }

   /*  if(numero === '0' ){
        setNumero(numero);
    }else{
        if(numero.length == 1){
            setNumero('0')
        }else{
            if(numero.length ==2){
                if(numero.startsWith('-')){
                    setNumero('0')
                }
            }else{
                setNumero(numero.slice(0,-1))
            }    
        }
    } */
  }


  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" onPress={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" onPress={positivoNegativo} />
        <BotonCalc texto="del" color="#9B9B9B" onPress={btnDel} />
        <BotonCalc texto="/" color="#FF9427" onPress={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" onPress={armarNumero} />
        <BotonCalc texto="8" onPress={armarNumero} />
        <BotonCalc texto="9" onPress={armarNumero} />
        <BotonCalc texto="X" color="#FF9427" onPress={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" onPress={armarNumero} />
        <BotonCalc texto="5" onPress={armarNumero} />
        <BotonCalc texto="6" onPress={armarNumero} />
        <BotonCalc texto="-" color="#FF9427" onPress={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" onPress={armarNumero} />
        <BotonCalc texto="2" onPress={armarNumero} />
        <BotonCalc texto="3" onPress={armarNumero} />
        <BotonCalc texto="+" color="#FF9427" onPress={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho onPress={armarNumero} />
        <BotonCalc texto="." onPress={armarNumero} />
        <BotonCalc texto="=" color="#FF9427" onPress={limpiar} />
      </View>

      {/* Gris oscuro: #2D2D2 */}
      {/* Naranja : #FF9427 */}
    </View>
  );
};
