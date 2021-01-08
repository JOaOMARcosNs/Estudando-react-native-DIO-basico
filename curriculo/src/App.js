
import React from 'react';
import {StyleSheet, View, Image, Text, SafeAreaView, Alert, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/FontAwesome'

import foto from './assets/pp.jpg';

const App = () => {

  function handleRedeSocial(rede_social) {
    switch (rede_social){
      case 'linkedin':
        Alert.alert('https://www.linkedin.com/in/joao-marcos-7a2a39173/')
      break;

      case 'github':
        Alert.alert('https://github.com/JOaOMARcosNs')
      break;

      case 'facebook':
        Alert.alert('https://www.facebook.com/joaomarcos.nevisdasilva/')
      break;

      case 'instagram':
        Alert.alert('https://www.instagram.com/1joao_marcos2/')
      break;

      case 'whatsapp':
        Alert.alert('https://api.whatsapp.com/send?phone=(77)99162-0945')
      break;
    }
  }

  return (
    <>
      <View style={styles.page}>
          <View style={styles.container_cabechalho} >
            <Image source={foto} style={styles.foto}/>
            <Text style={styles.nome} >JOÃO MARCOS NEVES DA SILVA</Text>
            <Text style={styles.funcao} >Estudante de ADS</Text>
            <View style={styles.redes_sociais} >

              <TouchableOpacity onPress={() => handleRedeSocial('github')} >
                <Icon name="github" size={24} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleRedeSocial('facebook')} >
                  <Icon name="facebook" size={24} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleRedeSocial('linkedin')} >
                 <Icon name="linkedin" size={24} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleRedeSocial('instagram')} >
                <Icon name="instagram" size={24}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleRedeSocial('whatsapp')} >
                <Icons name="whatsapp" size={24}/>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.card_conteiner} >
            <View style={styles.card}>
              <View  style={styles.card_header}>
                <Text>Experiencia Proficional:</Text>
              </View>
              <View style={styles.card_content}> 
                <Text style={styles.card_content_text}>Python</Text>
                <Text style={styles.card_content_text}>Java</Text>
                <Text style={styles.card_content_text}>Django</Text>

              </View>
            </View>
          </View>

          <View style={styles.card_conteiner} >
            <View style={styles.card}>
              <View  style={styles.card_header}>
                <Text>Formação Academica:</Text>
              </View>
              <View style={styles.card_content}> 
                <Text style={styles.card_content_text}>IFABA, campus(guanambi)</Text>
              </View>
            </View>
          </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({

    page: {
      backgroundColor: '#E7E7E7',
      flex:1,
    },
    container_cabechalho: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50
    },
    foto:{
      width: 100,
      height: 100,
      borderRadius: 125,
    }, 
    nome:{
      fontSize:15,
      fontWeight:'bold',
      marginTop:10,
      alignItems:'center',
      justifyContent:'center',
      
    },
    funcao:{
      color: '#939393',
      marginBottom: 10,
    },
    redes_sociais:{
      flexDirection:'row',
      justifyContent:'space-between',
      width: '60%',
      marginTop:20 
    },
    card_conteiner:{
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
    },
    card:{
      width: '60%',
      borderRadius: 5,
      borderWidth: 1,
      backgroundColor: '#939393',
      padding:10,
      backgroundColor: '#FFF'
    },
    card_content:{
      marginTop:10,
      
    },
    card_content_text:{
      color: '#939393',
      marginBottom:10,
    }

    
})

export default App;
