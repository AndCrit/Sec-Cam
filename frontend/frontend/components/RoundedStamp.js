import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'

const RoundedStamp = (props) => {
  

  function SelectPicture(icon){
    if(icon === 'sun'){
      console.log("check")
      return <Image style={styles.Image1} source={require('../assets/Sun.png')}/>;
    } else if (icon === 'on'){
      return <Image style={styles.Image1} source={require('../assets/Checkmark (Circle).png')}/>;
    }


  }

  return (
    
    <View style={styles.rounded_container}>
      <View style={styles.rounded_container_content}>
        <Text style= {[styles.text, styles.bold_text]}>{props.descriptor}</Text>
        {/** For Image */}
       
        <SelectPicture icon={props.imageIcon}/>
        
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
      alignItems: 'flex-start',
      backgroundColor: ''
    },
    Image1: {
      height: 30,
      width: 30,

    },

})