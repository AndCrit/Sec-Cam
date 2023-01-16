import React from 'react'
import {StyleSheet, Text, Image, View } from 'react-native'

function LoadingPage(props) {
  return (
    <View style={styles.container} >
        <Text>Sec-Cam</Text>
        <Image source={require('../assets/CameraLogoIcon.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5D66A2',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default LoadingPage
