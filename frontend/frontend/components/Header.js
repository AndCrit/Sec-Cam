import React from 'react'
import {StyleSheet, Image, View, SafeAreaView, TouchableOpacity} from 'react-native'


function Header(props) {

  function onPressMenu (){
    props.navigatePage(1);
  }
  function onPressUserSettings (){
    props.navigatePage(3);
  }
  function onPressHome (){
    props.navigatePage(0);
  }
  function onPressAlerts (){
    props.navigatePage(-1);
  }


  return (
    <SafeAreaView style={styles.HeaderContainer}>

        <View style={styles.LeftMenuContainer}>
          <TouchableOpacity onPress={onPressMenu}>
            <Image style={styles.Image1} source={require('../assets/MenuIcon.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressHome}>
            <Image style={styles.Image2} source={require('../assets/DesignIcon.png')}/>
          </TouchableOpacity>
        </View>

        <View style={styles.MiddleMenuBlock}/>

        <View style={styles.RightMenuContainer}>
          <TouchableOpacity onPress={onPressUserSettings}>
            <Image style={styles.Image1} source={require('../assets/UserIcon.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressAlerts}>
            <Image style={styles.Image1} source={require('../assets/NotifIcon.png')}/>
          </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    HeaderContainer: {
      paddingTop: 30,
      backgroundColor: '#535354',
      justifyContent: "center",
      alignItems:"center",
      flexDirection: 'row',
      height: '8%',
      width: "100%",
    },
    LeftMenuContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: "60%",
    },
    MiddleMenuBlock:{
      width:'3%',
    },
    RightMenuContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      
      width: "30%",
      hover: '#6923dc',
    },
    Image1: {
      height:30,
      width:30,
    },
    Image2: {
      height:35,
      width:115,
    },
    
  });

export default Header
