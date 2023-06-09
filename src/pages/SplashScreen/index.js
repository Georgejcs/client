import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function SplashScreen () {
 const navigation = useNavigation();

    return (
  <View style={styles.container}>
   
 

  <View style={styles.form}>
      <Image source={require('../../../assets/nuvem.png')}  style={styles.nuvem} />  
    
     
    
    <Text style={styles.tittle}>Você já é aluno? Clique no botão de Login!</Text>
    <Text style={styles.tittle2}>Primeira vez na Boa Forma? Realize o seu cadastro!</Text>

  <TouchableOpacity style={styles.buttonLogin}
  onPress={ () => navigation.navigate('Login')}
  >
  <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.buttonRegister}
  onPress={ () => navigation.navigate('Cadastro')}>
  <Text style={styles.buttonText}>Cadastro</Text>
  </TouchableOpacity>


  </View>

  </View>
);
}

const styles = StyleSheet.create({
  container:{
  flex: 1,
  backgroundColor: "#087FED"
  },

 

  form: {
  flex: 1,
  backgroundColor: '#ffff',
  // borderTopLeftRadius: 25,
  // borderTopRightRadius: 25,
  paddingStart: '10%',
  paddingEnd: '10%',
  justifyContent:'center',
  },

  nuvem:{
  width:'100%',
  resizeMode:'contain',
  marginTop: -80,
  },
  
  tittle:{
   fontSize: 24,
   fontWeight: 'bold',
   marginTop:30,
   marginBottom: 40,
  },

  tittle2:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:50,
    marginBottom: 12,
   },
 


 buttonLogin:{
 position: 'relative',
 backgroundColor: '#7CB7ED',
 borderRadius: 50,
 paddingVertical: 8,
 width: '70%',
 alignSelf: 'center',
 bottom: '22%',
 alignItems: 'center',
 justifyContent: 'center',
 },

 buttonRegister:{
   position: 'relative',
   backgroundColor: '#7CB7ED',
   borderRadius: 50,
   paddingVertical: 8,
   width: '70%',
   alignSelf: 'center',
   bottom: '5%',
   alignItems: 'center',
   justifyContent: 'center',
  },

 buttonText:{
 fontSize: 18,
 color: '#fff'
},


})