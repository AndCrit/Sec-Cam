import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingsPage = () => {
  return (
    <View>
    <View>
        <Text>Hello!</Text>
        <Text>
              Want to edit your profile? Change your preferences? 
              
              You can do it all here
        </Text>
      </View>
      <View>
        <Text>Account Overview</Text>
        <Text> Profile </Text>
        {/** TODO: Figure out some mapping for the settings */}
        

      </View>
      </View>
  )
}

export default SettingsPage

const styles = StyleSheet.create({})