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
        borderColor: '#787878',
        borderWidth: 1,
        justifyContent: "space-around",
        textAlignVertical: "bottom",
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
    });