import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Cadastro () {
    const navigation = useNavigation();
    return (
  <View style={styles.container}>
     
     <View style={styles.dumbbells}>
     <Image source={require ('../../../assets/7084419.png')}/>
     </View>
    

    <View style={styles.box}>
      <View style={styles.header}> 
    <Text style={styles.message}> Realize o seu cadastro! </Text>
    </View>
        
      <Text style={styles.text}>Email</Text>
        <View style={styles.icon}>
          
          <Ionicons name="mail" size={22} color="black" />
          <TextInput style={styles.place}
            placeholder='Coloque o seu e-mail'
            keyboardType='default'/>
        </View>

        <Text style={styles.text}>Peso</Text>
        <View style={styles.icon}>
          
          <Ionicons  name="barbell" size={22} color="black" />
          <TextInput style={styles.place}
            placeholder='Peso em kg'
            keyboardType='numeric'/>
        </View>


        <Text style={styles.text}>Altura</Text>
        <View style={styles.icon}>
          
          <Ionicons  name="body" size={22} color="black" />
          <TextInput style={styles.place}
            placeholder='Altura em cm'
            keyboardType='numeric'/>
        </View>

        <Text style={styles.text}>Senha</Text>

        <View style={styles.icon}>
          <Ionicons name="key-outline" size={22} color="black" />
          <TextInput style={styles.place}
            placeholder='Coloque a sua senha'
            keyboardType='default'
          />
        </View>


        <View style={styles.button}>
          <View style={styles.singin}>
            <TouchableOpacity style={styles.button_sigin}>
              <Text style={styles.title}> Continuar </Text>
            </TouchableOpacity>
          </View>


          
          <View style={styles.createaccount}>
            <TouchableOpacity onPress={ () => navigation.navigate('Login')}>
              <Text style={styles.textaccount}>Já possui conta? Faça o login!</Text>
            </TouchableOpacity>
          </View>


       </View>
    </View>
  </View>
  


);
}

const styles = StyleSheet.create({
  container:{
  flex: 1,
  backgroundColor:'#7CB7ED'
  },

  dumbbells:{
 resizeMode: 'contain',
 justifyContent: 'center',
 alignItems: 'center',
 },

  

  header:{
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '8%',
  
  },

  message:{
  fontSize: 28,
  fontWeight: 'bold',
  color: "#7CB7ED"
  },

 form:{
  flex:1,
  paddingStart: '5%',
  paddingEnd: '5%',
  marginTop: '5%',
 },

 box:{
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 40,
  width: '100%',
  height: 680,
 },

 

 icon:{
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  borderColor: '#d3d3d3 ',
  borderRadius: 10,
  borderWidth: 1,
  width: 300,
  height: 50,
  margin: 10,
  backgroundColor: '#FFFFFF',
  paddingLeft:15
 },

 place:{
  margin: 10,
 },

button:{
  width: '100%',
  alignItems: 'center',

},

singin:{
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
},

button_sigin:{
  padding: 0,
  backgroundColor: "#7CB7ED",
  alignItems: 'center',
  width: '70%',
  borderRadius: 10,
  alignItems: 'center',
  justifyContent:'center',
},

title:{
  padding: 0,
  color: '#ffff',
  borderRadius: 10,
  marginBottom: '5%',
},



createaccount:{
  margin:15,
},

textaccount:{
  fontSize:17,
  color:'#087FED',
},




})