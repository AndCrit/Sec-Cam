import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Modal, View, Image, Text,  Pressable, TouchableOpacity,Icon } from 'react-native';
import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';
import * as ImagePicker from 'expo-image-picker';
import React, { Component, useState, useEffect } from 'react'
import { TextInput } from "react-native-paper";


export default function Upload() {
  const PlaceholderImage = require('../assets/Streetview.jpg');
  const [selectedImage, setSelectedImage] = React.useState(PlaceholderImage);
  const[ProfileName, onChangeProfileName] = React.useState('New Profile');
  const[Gender, onChangeGender] = React.useState('Gender');
  const [Age, onChangeAge] = React.useState('Age');
  const[Photo, onSetPhoto] = React.useState(PlaceholderImage);
  const [modalVisible, setModalVisible] = useState(false);




  async function handleSubmit() {
    console.log("test");
    let userRequest = {
      
      "name":ProfileName,
      "gender": Gender,
      "age": Age,
      "photo": selectedImage,
    }
    console.log(userRequest);
    //await createUser(userRequest);
    setModalVisible(!modalVisible);
  }




  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

   console.log(result)
   console.log(result.assets[0].uri)
   let image = result.assets[0].uri;
   setSelectedImage(result.assets[0]);
   console.log("Selected Image: "+selectedImage)
   
  };

  return (
    <View style={styles.container}>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={styles.modalContainer}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        
        }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={[styles.text, styles.bold_text]}>New Profile Form</Text>    
              <Image source={selectedImage} style={styles.imagesmall} />    
              <View style={styles.inputSections}>
                <TextInput id = "user_profile_name"
                  mode="outlined"
                  style={styles.textinput}
                  onChangeText={text => onChangeProfileName(text)}/>
                <TextInput id = "user_age"
                  mode="outlined"
                  style={styles.textinput}
                  onChangeText={text => onChangeAge(text)}/>
                <TextInput id = "user_gender"
                  mode="outlined"
                  style={styles.textinput}
                  onChangeText={text => onChangeGender(text)}/>
              </View>
              <TouchableOpacity onPress={() => handleSubmit()} style={styles.SubmitButton}>
                  <Text style={styles.text}> Submit</Text>
              </TouchableOpacity>
              
            </View>
          </View>
      </Modal>

      <View style={styles.overture_container}>
        <Text style={[styles.text, styles.bold_text, styles.big_text]}> Upload Page</Text>
        <Text style={[styles.text, styles.bold_text]}>Use this page to upload a new profile</Text>
      </View>
      <View style={styles.imageContainer}>
      <ImageViewer
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button theme="primary" label="Use this photo" onPress={() => setModalVisible(true)} />
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  overture_container:{
    backgroundColor: '#535354',
    height: '12%',
    width: '100%',
    justifyContent: "center",
    alignContent: 'center',
    alignItems:"center",  
  },
  container: {
    backgroundColor: '#25292e',
    alignItems: 'center',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  textinput: {
    width:'100%',
    backgroundColor: '#a7a4f0',
    marginTop:10,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  imagesmall: {
    flex:1,
    marginTop: 5,
    alignItems: 'center',
    width: '90%',
    borderRadius: 18,
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
    fontSize: 50,
  },
  footerContainer: {
    flex:1,
    margin:20,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
   
  },
  inputSections:{
    flex:1,
    width: "90%",
  },
  SubmitButton:{
    
    marginTop:5,
    backgroundColor: 'black',
    width: '90%',
    height: '12%',
    borderRadius:18,
    justifyContent: 'center',
    alignItems:'center',
    
  },
  modalView: {
    margin: 20,
    
    backgroundColor: '#535354',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 320,
    height: 560,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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