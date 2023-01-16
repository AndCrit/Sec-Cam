import { Text, TextInput, View, Image } from 'react-native'
import React, { Component } from 'react'
import ProfileBlock from '../components/ProfileBlock'

export default function SavedDatabase(props) {
    return (
      <View>
        <View>
            <Text> Database</Text>
            <TextInput></TextInput>
            <Image source={require('../assets/MenuIcon.png')}/>
        </View>
        <Text>SavedDatabase</Text>
        <ProfileBlock/>
        <ProfileBlock/>
      </View>
    )
  }


