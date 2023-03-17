import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView, StatusBar} from 'react-native'
import React, { Component, useEffect } from 'react'
import NotificationBlock from '../components/NotificationBlock';
import { getNotifs } from './api';

export default function NotificationPage(props) {
    
    const[notifs, setNotifList] = React.useState 
    ([ 
      {"key":1, "notifName": "Bob", "notifDate": "Tuesday, July 29th", "notifTime":"5:30pm", "EventDesc":"RemovePerson",  "view": true},
      {"key":2, "notifName": "Bill", "notifDate": "Friday, Aug 12th", "notifTime":"7:30pm", "EventDesc":"RemovePerson","view": true},
      {"key":3, "notifName": "Bob2", "notifDate": "Tuesday, July 29th", "notifTime":"5:30pm","EventDesc":"RemovePerson", "view": true},
      {"key":4, "notifName": "Bob4", "notifDate": "Tuesday, July 29th", "notifTime":"5:30pm", "EventDesc":"RemovePerson", "view": true},
      {"key":5, "notifName": "Bill2", "notifDate": "Friday, Aug 12th", "notifTime":"7:30pm", "EventDesc":"RemovePerson","view": true },
      {"key":6, "notifName": "Bob5", "notifDate": "Tuesday, July 29th", "notifTime":"5:30pm", "EventDesc":"RemovePerson", "view": true},
        
    ]);
    
    const [displayData, setdisplayData] = React.useState([]);
    const [count, setCount] = React.useState(-1);
    const[query, onChangeQuery] = React.useState('Empty');
    
    //This function deals the damage
    function onFilter(filterText) {
      console.log("Query: "+query);
      if(query == ""){
        setdisplayData(notifs);
        onChangeQuery('empty');
      }
      var tempObj = notifs; //change to profiles to test
      tempObj = notifs.filter(function (obj) {
          return obj.notifName.toLowerCase().includes(filterText.toLowerCase())
      }).map(function (obj) {
          return obj;
      });
      setdisplayData(tempObj);
      console.log(displayData);
    }
      
    async function loadData() {
      //setNotifList(await getNotifs)
      if(count<0){
        setCount(0)
        setdisplayData(notifs);
      } 
    }
    loadData();
    function onPressUploadPhoto(){
      props.navigatePage(2);
    }

  
    function onPressDismissAlert(id){
      const new_notif = displayData.filter((notif) => notif.key !== id);
      setdisplayData(new_notif)
      console.log(new_notif);
      //Call Axios Functions
    }
    

    function NotifList(){
      //TODO FIX SCROLLING
      return (
        <SafeAreaView>
        <ScrollView style={styles.scroll_list} vertical={true}>
        {
        
        displayData.map((notif) =>{
         
            return(
              <NotificationBlock {...notif} id={notif.key} UploadPhoto = {onPressUploadPhoto} DismissAlert = {onPressDismissAlert} />
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

