
import {StyleSheet, Modal, Pressable, Alert, Image, View, SafeAreaView, TouchableOpacity, Text} from 'react-native'
import React, {useState} from 'react';

function Header(props) {
  
  function onPressHome (){
    props.navigatePage(0);
  }
  function onPressDatabase (){
    props.navigatePage(1);
  }
  function onPressUpload (){
    props.navigatePage(2);
  }
  function onPressUserSettings (){
    props.navigatePage(3);
  }
  function onPressAlerts (){
    props.navigatePage(4);
  }
  
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.HeaderContainer}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Where do you want to go?</Text>
            
            <Pressable style={[styles.button]}
              onPress={() => {
                setModalVisible(!modalVisible);
                onPressDatabase();
                }}>
              <Text style={styles.textStyle}> Database </Text>
            </Pressable>

            <Pressable style={[styles.button]}
              onPress={() => {
                setModalVisible(!modalVisible);
                onPressUpload();
                }}>
              <Text style={styles.textStyle}> Upload </Text>
            </Pressable>

            <Pressable style={[styles.button]}
              onPress={() => {
                setModalVisible(!modalVisible);
                onPressAlerts();
                }}>
              <Text style={styles.textStyle}> Notifications </Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close Menu</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

        <View style={styles.LeftMenuContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      backgroundColor: '#a7a4f0',
    },
    buttonClose: {
      backgroundColor: '#ca3563',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    
  });

export default Header
