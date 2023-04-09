import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView, StatusBar} from 'react-native'
import React, { Component, useState, useEffect, useRef } from 'react'
import NotificationBlock from '../components/NotificationBlock';
import {firebase} from '../backend/config'
export default function NotificationPage(props) {
    const [displayData, setdisplayData] = React.useState([]);
    const [count, setCount] = React.useState(-1);
    const[query, onChangeQuery] = React.useState('');
    
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
      console.log(displayData);
    }
      
    //Load Jsons from Server
    async function loadJsons(){
      //Get JSON
      let fileRef = firebase.storage().ref().child('StationD1.json')
      if(count<0){
      fileRef
        .getDownloadURL()
        .then((url) => {
          console.log(url);
          const result = fetch(url).then(response => response.json())
          .then(data => {
            console.log(data)
              setCount(0)
              setdisplayData(data);
              console.log("Updated Data")
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
   
    function onPressUploadPhoto(){
      props.navigatePage(2);
    }

  
    function onPressDismissAlert(id){
      //Filter all notifs without removed one
      const new_notif = displayData.filter((notif) => notif.key !== id);
      //Filter removed notif
      const removed_notif = displayData.filter((notif) => notif.key === id);
      //Call Http Functions to tell server to delete alert
      dismissAlert(id, removed_notif[0]);
      //Update
      setdisplayData(new_notif);
      console.log(new_notif);
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

   


    
    return (
      <View style={styles.overture_container}>
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
  });

