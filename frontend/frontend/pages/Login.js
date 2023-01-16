import React from 'react'
import {StyleSheet, Text, Image, View, Button, TextInput} from 'react-native'
function Login(props) {
  
    const [text, onChangeUsername] = React.useState(null);
    const [pin, onChangePin] = React.useState(null);
  
    function onPressLogin (){
      alert('Sign In Check pressed');
      props.navigatePage(0);
    }

  return (
    <View style={styles.Container}>
      <View style={styles.ImageContainer}>
          <Image source={{
              width: "100%",
              height: "100%",
              uri : 'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_960_720.jpg'}}>
          </Image>
      </View>
      <TextInput
        onChangeLogin={onChangeUsername}
        placeholder="Username"
        value={text}
      />
      <TextInput
        onChangeLogin={onChangePin}
        value={pin}
        placeholder="PIN"
        keyboardType="numeric"
      />
      <View>
        <View style={styles.TextContainer}>
          <Button color='#759bc1' title='Sign in' onPress={() => onPressLogin()}/>
          <Button color='#759bc1' title='Sign up' onPress={() => alert('Sign Up pressed')}/>
        </View>
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: "100%",
  },
  ImageContainer: {
    height: '50%',
    width: "100%",
  },
  TextContainer: {
    height: '30%',
    width: "100%",
    backgroundColor: '#5D66A2',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex : 9, 
  },
  
  
});

export default Login
