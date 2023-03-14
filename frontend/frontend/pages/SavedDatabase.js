import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React, { Component } from 'react'
import ProfileBlock from '../components/ProfileBlock'
import { getUsers } from './api';

export default function SavedDatabase(props) {

    const[query, onChangeQuery] = React.useState('Useless Multiline Placeholder');

    const[profiles, onSetProfile] = React.useState 
    ([ 
        {"key":1, "ProfileName": "Bob", "ProfileAddedDate": "Tuesday, July 29th", "AdditionalInfo":"Likes Peanuts", "PhoneNumber": "416-123-1111"},
        {"key":2, "ProfileName": "Bill", "ProfileAddedDate": "Friday, Aug 12th", "AdditionalInfo":"Eats Fish", "PhoneNumber": "416-123-1111"},
        {"key":3, "ProfileName": "Bob2", "ProfileAddedDate": "Tuesday, July 29th", "AdditionalInfo":"Stinky toes", "PhoneNumber": "416-123-1111"},
        {"key":4, "ProfileName": "Bo", "ProfileAddedDate": "Tuesday, July 29th", "AdditionalInfo":"Harry Potter Fan", "PhoneNumber": "416-123-1111"},
        {"key":5, "ProfileName": "Bin", "ProfileAddedDate": "Friday, Aug 12th", "AdditionalInfo":"Weeb", "PhoneNumber": "416-123-1111"},
        {"key":6, "ProfileName": "Burp", "ProfileAddedDate": "Tuesday, July 29th", "AdditionalInfo":"Confused", "PhoneNumber": "416-123-1111"},
        
    ]);
    const [userList, setUserList] = React.useState([]);
    const [displayData, setdisplayData] = React.useState([]);
    const [count, setCount] = React.useState(-1);

    function onFilter(filterText) {
      console.log("Query: "+query);
      var tempObj = userList; //change to profiles to test
      tempObj = userList.filter(function (obj) {
          return obj.ProfileName.toLowerCase().includes(filterText.toLowerCase())
      }).map(function (obj) {
          return obj;
      });
      
      setdisplayData(tempObj);
      console.log(tempObj);
  }
    
    async function loadData() {
      setUserList(await getUsers())
      if(count<0)setCount(0)
    }

    function onPressRemoveProfile(id){
      const new_profiles = profiles.filter((profile) => profile.key !== id);
      onSetProfile(new_profiles)
      console.log(new_profiles);
      //Call Axios Functions
    }

    function ProfileList(){
    
      return (
        <SafeAreaView>
        <ScrollView style={styles.scroll_list} vertical={true}>
        {profiles.map((profile) =>{
          return(
            <ProfileBlock {...profile} id={profile.key} RemoveProfile = {onPressRemoveProfile} />
          );
        })}
      </ScrollView>
      </SafeAreaView>
      );
    }

    return (
      <View style={styles.overture_container}>
          <Text style={[styles.text, styles.big_text, styles.bold_text ]}> Database</Text>
            <View style={styles.text_input}>
            <TextInput editable maxLength={20}  onChangeText={text => onChangeQuery(text)} > Search for profile </TextInput>
            <TouchableOpacity onPress={() => onFilter(query)}>
              <Image style={styles.icon} source={require('../assets/Search.png')}/>
            </TouchableOpacity>
        </View>
        <Text style={styles.text} >Saved Profiles</Text>
        <ProfileList/>
        <StatusBar style="auto" />
      </View>
    )
  }

  const styles = StyleSheet.create({
    overture_container: {
      backgroundColor: '#535354',
      height: '100%',
      alignItems: 'center',
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

