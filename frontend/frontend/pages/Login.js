import React from 'react'
import {StyleSheet, Text, Image, View, Button, TextInput, ImageBackground, TouchableOpacity} from 'react-native'
function Login(props) {
  
    const [text, onChangeUsername] = React.useState(null);
    const [pin, onChangePin] = React.useState(null);
    const image = {uri: 'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_960_720.jpg'};

    function onPressLogin (){
      alert('Sign In Check pressed');
      props.navigatePage(0);
    }

  return (
   
      <ImageBackground source={require('../assets/Streetview.jpg')} style={styles.container}>
        <View style={styles.HeaderContainer}>
          <Image style={styles.Image1} source={require('../assets/DesignIcon.png')}/>
        </View>
        <View style={styles.input_container}>
          
          <TextInput
          onChangeLogin={onChangeUsername}
          placeholder="Username"
          value={text}
          style={styles.TextContainer}
          />
          <TextInput
            onChangeLogin={onChangePin}
            value={pin}
            placeholder="PIN"
            keyboardType="numeric"
            style={styles.TextContainer}
          />
          <TouchableOpacity style={styles.ButtonContainer} onPress={() => onPressLogin()}>
              <Text> Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonContainer} onPress={() => onPressLogin()}>
              <Text> Sign up</Text>
          </TouchableOpacity>
          
      </View>
      </ImageBackground>
   
  )
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: '100%',
  },
  Image1:{
    
    
  },
  HeaderContainer:{
    height:"10%",
    justifyContent:"flex-end",
    alignItems:'center',
    alignContent: 'center',

  },
  input_container:{
    height:'80%',
    width:'100%',
    justifyContent:"flex-end",
    alignItems:'center',
    alignContent: 'center',
    
  },
  ButtonContainer: {
    flexDirection:"row",
    height:45,
    opacity: 0.75,
    width:"100%",
    backgroundColor:'white',
    justifyContent: 'center',
    
    alignItems:'center',
    borderWidth:1,
    borderColor:"black",
  },
  ImageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  
  TextContainer: {
    height: 45,
    width: "100%",
    opacity: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    
    borderBottomWidth:2,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  
});

export default Login