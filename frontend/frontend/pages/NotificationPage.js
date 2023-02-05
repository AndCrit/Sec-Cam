import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList, ScrollView,SafeAreaView } from 'react-native'
import React, { Component, useEffect } from 'react'
import NotificationBlock from '../components/NotificationBlock';

export default function NotificationPage(props) {
    
    const[notifications, setNotif] = React.useState 
    ([ 
        {"key":1, "notifName": "Bob", "notifDate": "Tuesday, July 29th", "notifTime":"5:30pm", "view": true},
        {"key":2, "notifName": "Bill", "notifDate": "Friday, Aug 12th", "notifTime":"7:30pm","view": true},
        {"key":3, "notifName": "Bob2", "notifDate": "Tuesday, July 29th", "notifTime":"5:30pm", "view": true},
        {"key":4, "notifName": "Bob4", "notifDate": "Tuesday, July 29th", "notifTime":"5:30pm", "view": true},
        {"key":5, "notifName": "Bill2", "notifDate": "Friday, Aug 12th", "notifTime":"7:30pm","view": true },
        {"key":6, "notifName": "Bob5", "notifDate": "Tuesday, July 29th", "notifTime":"5:30pm", "view": true},
        
      ]);
    
      function onPressUploadPhoto(){
        props.navigatePage(5);
      }

      //TODO FIXME PLEASE, THIS DON'T WORK
      function onPressDismissAlert(id){
        const new_notif = notifications.filter((notif) => notif.key !== id);
      setNotif(new_notif)
      
    }
    

    function NotifList(){
      //TODO FIX SCROLLING
      return (
        <SafeAreaView>
        <ScrollView style={styles.scroll_list} vertical={true}>
        {
        
        notifications.map((notif) =>{
         
            return(
              <NotificationBlock {...notif} id={notif.key} UploadPhoto = {onPressUploadPhoto} DismissAlert = {() => onPressDismissAlert} />
            );
         
        })}
      </ScrollView>
      </SafeAreaView>
      );
    }

    function removeNotif(i){
      
    }


    const[query, onChangeQuery] = React.useState('Useless Multiline Placeholder');
    return (
      <View style={styles.overture_container}>
        <Text style={[styles.text, styles.big_text, styles.bold_text ]}> Notifications </Text>
        <View style={styles.text_input}>
          <TextInput editable maxLength={20}  onChangeQuery={text => onChangeQuery(text)} style={styles.text_input} > Search for notif</TextInput>
          <TouchableOpacity>
            <Image style={styles.icon} source={require('../assets/Search.png')}/>
          </TouchableOpacity>
        </View>
       
        <NotifList/>
        

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

