import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView, StatusBar, Modal} from 'react-native'
import React, { Component, useState, useEffect, useRef } from 'react'
import NotificationBlock from '../components/NotificationBlock';
import {firebase} from '../backend/config'
export default function NotificationPage(props) {
    const [displayData, setdisplayData] = React.useState([]);
    const [count, setCount] = React.useState(-1);
    const[query, onChangeQuery] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    
    const[ProfileName, onChangeProfileName] = React.useState('New Profile');
    const[PhoneNum, onChangePhoneNum] = React.useState('PhoneNum');
    const [AddInfo, onChangeAddInfo] = React.useState('AddInfo');
    const [reviewNotif, setReviewNotif] = React.useState("");
    const [selectedImage, setSelectedImage] = React.useState("PlaceholderImage");
    const [isEffectComplete, setIsEffectComplete] = useState(false);
    const imageSource = "";

    //Reset the upload page's notif
    //props.uploadNotif("");

    //This function deals the damage
    //Filters the results based on query given in search bar
    function onFilter(filterText) {
      console.log("Query: "+query);
      if(query == ""){
        setCount(-1);
        loadJsons();
        
      }
      var tempObj = displayData; //change to profiles to test
      tempObj = displayData.filter(function (obj) {
          return obj.notifName.toLowerCase().includes(filterText.toLowerCase())
      }).map(function (obj) {
          return obj;
      });
      setdisplayData(tempObj);
      //console.log(displayData);
    }
      
    //Load Jsons from Server
    async function loadJsons(){
      //Get JSON
      let fileRef = firebase.storage().ref().child('StationD1.json')
      if(count<0){
      fileRef
        .getDownloadURL()
        .then((url) => {
          //console.log(url);
          const result = fetch(url).then(response => response.json())
          .then(data => {
            //console.log(data)
              setCount(0)
              setdisplayData(data);
              //console.log("Updated Data")
          });
        })
        .catch((e) => console.log('deeeee => ', e));
    }
      
    }
    loadJsons();
    
    async function dismissAlert(id, notif){
      let userRequest = {... notif, "type":"remNotif"};
      const filename = "StationC"
      const infoJSON = JSON.stringify(userRequest)
      const infoblob = new Blob([infoJSON], {
        type:'application/json'
      })
  
      const ref = firebase
        .storage()
        .ref()
        .child(filename+".json");
      const snapshot = await ref.put(infoblob);
  
    }
   
    
    function onPressUploadPhoto(id){
      
      setIsEffectComplete(false)
      //props.navigatePage(2);
      //open modal
      console.log(id)
      const review_notif = displayData.filter((notif) => notif.key === id);
      
      console.log("r", review_notif[0])
      const pictures = review_notif
      setReviewNotif(pictures)
      
      if (!isEffectComplete) {
        return; // Return early if useEffect is not complete
      }

      //console.log("Review Notif", reviewNotif)
      
      setSelectedImage(reviewNotif[0].images[0])
      //console.log("Picture Updated:", selectedImage);
      setModalVisible(!modalVisible);

    }
    useEffect(() => {
      if(count>=0){
     // console.log("Notif Updated:", reviewNotif);
      
      // Perform asynchronous actions that need to complete before selectNotifToSend
      // ...
      // Mark useEffect as complete
      
      //console.log(reviewNotif[0].images[0])
      setIsEffectComplete(true);
      
      }
      
    }, [reviewNotif, selectedImage]);



  
    function onPressDismissAlert(id){
      //Filter all notifs without removed one
      const new_notif = displayData.filter((notif) => notif.key !== id);
      //Filter removed notif
      const removed_notif = displayData.filter((notif) => notif.key === id);
      //Call Http Functions to tell server to delete alert
      dismissAlert(id, removed_notif[0]);
      //Update
      setdisplayData(new_notif);
      //console.log(new_notif);
    }
    
  
    async function handleSubmit() {
      //Close the Modal
      setModalVisible(!modalVisible);
      //Create a userRequest Json and remove Notification related info
      const filename = "StationC"
      let userRequest = {
        ...reviewNotif[0],
        "ProfileName":ProfileName,
        "PhoneNumber": PhoneNum,
        "AdditionalInfo": AddInfo,
        //"PictureId": PictureID,
        "image": ProfileName+"1.jpg",
        "ProfileAddedDate" : new Date().toDateString(),
        "type": "AddUser",
      }
      delete userRequest.EventDesc;
      delete userRequest.notifName;
      delete userRequest.notifTime;
      delete userRequest.notifDate;
      delete userRequest.key;
      //console.log("USER REQUEST TO BE SENT\n", userRequest)

      //Send UserRequest to the firebase
      const infoJSON = JSON.stringify(userRequest)
      const infoblob = new Blob([infoJSON], {
        type:'application/json'
      })
      const ref = firebase
        .storage()
        .ref()
        .child(filename+".json");
      const snapshot = await ref.put(infoblob);
      console.log("Submitting")
    }

    function NotifList(){
      //TODO FIX SCROLLING
      return (
        <SafeAreaView>
        <ScrollView style={styles.scroll_list} vertical={true}>
        {
        
        displayData.map((notif) =>{
            
            return(
              <NotificationBlock {...notif} id={notif.key} imageurl={notif.imageURI} UploadPhoto = {onPressUploadPhoto} DismissAlert = {onPressDismissAlert} />
            );
         
        })}
      </ScrollView>
      </SafeAreaView>
      );
    }

   
    function onPressPictureChanger(propagation){
      let key; // Variable to store the key
      for (const k in reviewNotif[0].images) {
        if (reviewNotif[0].images[k] === selectedImage) {
          key = k;
          //console.log("K found")
          break; // Stop iterating once the key is found
        }
      }
      
      const keys = Object.keys(reviewNotif[0].images);
      const currentIndex = keys.indexOf(key);
      let nextIndex;
      if(propagation>0){
        
        nextIndex = keys[currentIndex + 1];
        //console.log("index", nextIndex)
        if(!nextIndex && (currentIndex + 1)>=keys.length-1){
          //console.log("index inside", nextIndex)
          nextIndex = keys[0];
        }
      } else {
        nextIndex = keys[currentIndex -1];
        if (!nextIndex && (currentIndex - 1)<=0){
          nextIndex = keys[keys.length-1];
        }
      }
      setSelectedImage(reviewNotif[0].images[nextIndex])
      console.log("New Picture", selectedImage);
    }

    function onPressDeletePicture(){
      let key;
      for (const k in reviewNotif[0].images) {
        if (reviewNotif[0].images[k] === selectedImage) {
          key = k;
          //console.log("K found", k)
          break; // Stop iterating once the key is found
        }
      }
      let keyValue = parseInt(key)
      const updatedState = { ...reviewNotif }
      //console.log("State: ", updatedState[0].images)
      delete updatedState[0].images[keyValue];
      //updatedState.images = {filteredEntries}
      setReviewNotif(updatedState)
      console.log("Updated", reviewNotif)
      onPressPictureChanger(-1)
    }
    
  

    return (
      <View style={styles.overture_container}>
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
              <TouchableOpacity onPress={() => onPressPictureChanger(-1)} style={[styles.scrolling_buttons,styles.scrolling_button_left, styles.scrollingButtonContainer]}>
                <Text>Prev</Text>
              </TouchableOpacity>
              <Image source={{uri : selectedImage}} style={styles.imagesmall}/>
              <TouchableOpacity onPress={() => onPressPictureChanger(1)} style={[styles.scrolling_buttons,styles.scrolling_button_right]}>
                <Text>Next</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPressDeletePicture()} style={[styles.garbage_button, styles.scrolling_button_right]}>
                <Image style={styles.IconContainer} source={require('../assets/Bin.png')}/>
              </TouchableOpacity>
              <View style={styles.inputSections}>
                <TextInput
                  mode="outlined"
                  placeholder='Name'
                  style={styles.textinput}
                  onChangeText={text => onChangeProfileName(text)}/>
                <TextInput
                  mode="outlined"
                  placeholder='PhoneNum'
                  style={styles.textinput}
                  onChangeText={text => onChangePhoneNum(text)}/>
                <TextInput 
                  mode="outlined"
                  placeholder='Additional Info'
                  style={styles.textinput}
                  onChangeText={text => onChangeAddInfo(text)}/>
              </View>
              <TouchableOpacity onPress={() => handleSubmit()} style={styles.SubmitButton}>
                  <Text style={styles.text}> Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Text style={[styles.text, styles.big_text, styles.bold_text ]}> Notifications </Text>
        <View style={styles.text_input}>
          <TextInput editable maxLength={20}  onChangeText={text => onChangeQuery(text)} style={styles.text_input} > Search for notif</TextInput>
          <TouchableOpacity onPress={() => onFilter(query)}>
            <Image style={styles.icon} source={require('../assets/Search.png')}/>
          </TouchableOpacity>
        </View>
        
        <NotifList/>
        <StatusBar style="auto" />
      </View>
    )
  }

  const styles = StyleSheet.create({
    overture_container: {
      backgroundColor: '#535354',
      height: '100%',
      width: '100%',
      alignItems: 'center',
    },
    scroll_list:{
      flexGrow: 1,
    },

    text:{
      color:'white',
      fontSize: 16,
      fontWeight: "400",
      textAlign:'center',
    },
    text_input:{
      flexDirection: 'row'
    },

    garbage_button:{
      justifyContent:'flex-start',
      position:'absolute',
      zIndex:1,
      top: 320,
      right:5,
    },


    
    scrolling_buttons:{
      justifyContent:'center',
      position:'absolute',
      zIndex:1,
      top: 200,
    },
    scrolling_button_right:{
      right: 50,
    },
    scrolling_button_left:{
      left: 50,
      },

    text_input:{
      justifyContent: 'space-between',
      flexDirection: 'row',
      color: 'white',
      backgroundColor: '#a7a4f0',
      width:'70%',
      borderRadius: 5,
    },
    text_input_text:{
      justifyContent:'flex-start',
    },
    text_input_icon:{
      justifyContent:'flex-end',
    },

    icon:{
      height: 30,
      width:30,
    },
    
    bold_text:{
      fontWeight:"700",
    },

    big_text:{
      fontSize: 50,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
     
    },
    inputSections:{
      flexShrink:1,
      width: "90%",
    },
    imagesmall: {
      flex:1,
      marginTop: 5,
      alignItems: 'center',
      width: '90%',
      borderRadius: 18,
    },
    textinput: {
      width:'100%',
      backgroundColor: '#a7a4f0',
      marginTop:10,
    },

    SubmitButton:{
      flexShrink:1,
      marginTop:5,
      backgroundColor: 'black',
      width: '90%',
      height: '9%',
      borderRadius:18,
      justifyContent: 'center',
      alignItems:'center',
    },
    IconContainer:{
      height: 40,
      width: 40,
      tintColor: 'red',
    },
  });

