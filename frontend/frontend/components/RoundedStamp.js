import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const RoundedStamp = (props) => {
  
  function SelectPicture(icon){
    if(icon === 'sun'){
      //console.log('../assets/Sun.png');
     return '../assets/Sun.png';
    } else if (icon === 'on'){
      //console.log('../assets/Checkmark (Circle).png');
      return '../assets/Checkmark_Circle.png';
    }


  }

  return (
    
    <View style={styles.rounded_container}>
      <View style={styles.rounded_container_content}>
        <View style = {styles.text_container}>
        <Text style= {[styles.text, styles.bold_text]}>
          {props.descriptor}
        </Text>
        </View>
        <View style= {styles.img_container}>
          
          <Image style={styles.Image1} source={'../assets/CameraLogoIcon.png'}/>
        </View>
      </View>
    </View>
  )
}

export default RoundedStamp

const styles = StyleSheet.create({
    rounded_container: {
        borderRadius: 25,
        width: 125,
        height: 50,
        backgroundColor: '#787878',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_container:{
      width: "70%",
    },
    img_container:{
      justifyContent: 'center',
      alignItems: 'center',
      width: "30%",
    },
    text:{
        color:'white',
        fontSize: 14,
        fontWeight: "400",
    },
    bold_text:{
        fontWeight:"700",
    },
    rounded_container_content:{
      height: '90%',
      width: '75%',
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor: ''
    },
    Image1: {
      height: 30,
      width: 30,

    },

})