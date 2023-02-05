import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SettingsBlock = (props) => {
  let name = props.settingName;
  let value = props.settingValue;
  return (
    <View style={styles.SettingsBox}>
      
      <Text style= {[styles.text, styles.bold_text]}> {name} </Text>
      <Text style={styles.text}> {value} </Text>
      
    </View>
  )
  
}

export default SettingsBlock

const styles = StyleSheet.create({
    SettingsBox: {
        marginTop:10,
        flexDirection: 'row',
        backgroundColor: '#242524',
        height: '25%',
        width: "100%",
        justifyContent: "space-between",
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