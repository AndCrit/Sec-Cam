import React from 'react'
import {StyleSheet, Image, View} from 'react-native'

function Header() {
  return (
    <View style={styles.HeaderContainer}>
        <Image source={require('../assets/MenuIcon.png')}>
          </Image>
        <Image source={require('../assets/DesignIcon.png')}>
         </Image>
        <View style={styles.UserContainer}>
            <Image source={{
              width: 30,
              height: 30,
              uri : '../assets/UserIcon.png'}}>
            </Image>
            <Image source={{
              width: 30,
              height: 30,
              uri : '../assets/NotifIcon.png'}}>
            </Image>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    HeaderContainer: {
      backgroundColor: '#5D66A2',
      flexDirection: 'row',
      height: '25%',
      width: "100%",
    },
    UserContainer: {
      height: '100%',
      width: "33%",
      hover: '#6923dc',
    },
    
    
  });

export default Header
