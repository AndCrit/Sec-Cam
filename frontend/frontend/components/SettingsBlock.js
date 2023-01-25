import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SettingsBlock = (props) => {
    
  return (
    <View style={styles.SettingsBox}>
      
      <Text style= {[styles.text, styles.bold_text]}> {props.settingName} </Text>
      <Text style={styles.text}> {props.settingValue} </Text>
      
    </View>
  )
  
}

export default SettingsBlock

const styles = StyleSheet.create({
    SettingsBox: {
        flexDirection: 'row',
        backgroundColor: '#242524',
        height: '5%',
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      },
      text:{
        color:'white',
        fontSize: 16,
        fontWeight: "400",
      },
      bold_text:{
        fontWeight:"700",
      },
      big_text:{
        fontSize: 20,
      },
      line: {
        height:1,
        width: '80%',
        backgroundColor:'#535354',
      },
    });