import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Login () {
    const navigation = useNavigation();

    return (
  <View style={styles.container}>
     
     <View style={styles.dumbbells}>
     <Image source={require ('../../../assets/logo.png')}/>
     </View>
    

    <View style={styles.box}>
      <View style={styles.header}> 
    <Text style={styles.message}> Faça o seu login! </Text>
    </View>
        
      <Text style={styles.text}>Email</Text>
        <View style={styles.icon}>
          
          <Ionicons name="mail" size={22} color="black" />
          <TextInput style={styles.place}
            placeholder='Coloque o seu e-mail'
          />
        </View>

        <Text style={styles.text}>Senha</Text>

        <View style={styles.icon}>
          <Ionicons name="key-outline" size={22} color="black" />
          <TextInput style={styles.place}
            placeholder='Coloque a sua senha'
          />
        </View>


        <View style={styles.button}>
          <View style={styles.singin}>
            <TouchableOpacity style={styles.button_sigin} onPress={ () => navigation.navigate('Home')}>
              <Text style={styles.title}> Entrar </Text>
            </TouchableOpacity>
          </View>


          <View style={styles.googlefacebook}>
            <TouchableOpacity style={styles.buttongf} onPress={ () => navigation.navigate('Home')}>
              <View style={styles.gf_content}>
                <Ionicons name="logo-google" size={22} color="black" />
              </View>
              <Text style={styles.text_gf}> Entrar com Google </Text>
            </TouchableOpacity>
          </View>



          <View style={styles.googlefacebook}>
            <TouchableOpacity style={styles.buttongf} onPress={ () => navigation.navigate('Home')}>
              <View styles={styles.gf_content}>
                <Ionicons name="logo-facebook" size={22} color="black" />

              </View>
              <Text style={styles.text_gf}> Entrar com Facebook </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.createaccount} >
            <TouchableOpacity onPress={ () => navigation.navigate('Cadastro')}>
              <Text style={styles.textaccount}> Crie a sua conta!</Text>
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
  height: 628,
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
  padding: 10,
  backgroundColor: "#7CB7ED",
  alignItems: 'center',
  width: '70%',
  borderRadius: 10,
},

title:{
  padding: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffff',
  width: '22%',
  borderRadius: 10,
  marginTop: '1%',
},

googlefacebook:{
  padding: 16,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: "#D9D9D9",
  width: '50%',
  borderRadius: 10,
  marginTop: '3%',
},

buttongf:{
  flexDirection: 'row'
},

gf_content:{
  flexDirection: 'row'
},

text_gf:{
  textAlignVertical: 'center'

},

createaccount:{
  margin:15,
},

textaccount:{
  fontSize:17,
  color:'#087FED',
},




})