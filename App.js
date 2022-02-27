import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default function App (){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [message, setMessage] = useState('Aguardando o calculo do IMC')

  function handleSubmit(){
    const alt = altura/100;
    const imc = peso/(alt*alt);
    if (imc<=18.5){ 
      setMessage('Seu IMC é ' + imc.toFixed(2) + '\n Você está abaixo do peso!') 
    }else if (imc>18.5 && imc<=24.9){ 
      setMessage('Seu IMC é ' + imc.toFixed(2) + '\n Você está no peso ideal!')
    }else if (imc>24.9 && imc<=29.9){ 
      setMessage('Seu IMC é ' + imc.toFixed(2) + '\n Você está com sobrepeso!')
    }else{ 
      setMessage('Seu IMC é ' + imc.toFixed(2) + '\n Você está com obesidade!')
    }
  }

  return(
    <View style={styles.container}> 
      <Text style={styles.title}>Calcule o seu IMC</Text>
      <Text style={styles.weight}>Peso </Text>
      <TextInput 
        style={styles.input}
        value={peso}
        onChangeText={ (peso)=> setPeso(peso)}
        placeholder="(Kg)"
        keyboardType="numeric"
        />
      <Text style={styles.weight}>Altura </Text>
      <TextInput 
        style={styles.input}
        value={altura}
        onChangeText={ (altura)=> setAltura(altura)}
        placeholder="(cm)"
        keyboardType="numeric"
        />
      <TouchableOpacity 
        onPress={handleSubmit}
        >
        <Text style={styles.button}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.result}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    
  },
  title:{
    color:'darkblue',
    fontSize:25,
    textTransform:'uppercase',
    textAlign: 'center'
  },
  weight:{
    fontSize:15,
    textAlign:'center',
    marginTop:20,
  },
  input:{
    backgroundColor:'aliceblue',
    width:100,
    margin:10,
    padding:8,
    color:'black'
  },
  button:{
    margin:20,
    width:100,
    padding:10,
    backgroundColor: 'rgb(49, 162, 236)',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  result: {
    marginTop:20,
    padding:10,
    fontSize:16,
    textAlign:'center',
    lineHeight:25
  }
})