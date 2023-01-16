import { View, Text } from 'react-native'
import React from 'react'

const SettingsBlock = (props) => {
    
  return (
    <View style={styles.SettingsB}>
      <Text> {props.SettingName} </Text>
      <Text> {props.SettingValue} </Text>
    </View>
  )
  
}

export default SettingsBlock

const styles = StyleSheet.create({
    SettingsBox: {
        flexDirection: 'row',
        backgroundColor: '#5D66A2',
        height: 100,
        width: "100%",
        borderColor: '#787878',
        borderWidth: 1,
      },
    })