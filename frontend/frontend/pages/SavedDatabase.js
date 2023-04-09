import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React, { Component } from 'react'
import ProfileBlock from '../components/ProfileBlock'
import {firebase} from '../backend/config'

export default function SavedDatabase(props) {

    const[query, onChangeQuery] = React.useState('');
    const [displayData, setdisplayData] = React.useState([]);
    const [count, setCount] = React.useState(-1);

    function onFilter(filterText) {
      console.log("Query: "+query);
      if(query == ""){
        setCount(-1)
        loadJsons();
        
      }
      var tempObj = displayData; //change to profiles to test
      tempObj = displayData.filter(function (obj) {
          return obj.ProfileName.toLowerCase().includes(filterText.toLowerCase())
      }).map(function (obj) {
          return obj;
      });
      
      setdisplayData(tempObj);
      console.log(tempObj);
  }
  
  async function loadJsons(){
    //Get JSON
    console.log("User List")
    let fileRef = firebase.storage().ref().child('StationD2.json')
    if(count<0){
    await fileRef
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        const result = fetch(url).then(response => response.json())
        .then(data => {
          console.log(data)
          
            setCount(0)
            setdisplayData(data);
          
        });
      })
      .catch((e) => console.log('deeeee => ', e));
    }
  }
  loadJsons();




  async function loadImage(image) {
    console.log("Users List")
    
    let fileRef = firebase.storage().ref().child(image)
    
    await fileRef
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        setImage(url)
      })
      .catch((e) => console.log('deeeee => ', e));
    

    console.log("image")
  }


  async function RemoveUser(profile){
    let userRequest = {... profile, "type":"remUser"};
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

  function onPressRemoveProfile(id){
    const new_profiles = displayData.filter((profile) => profile.key !== id);
    const removed_profile = displayData.filter((profile) => profile.key === id);
    //Call Axios Functions
    RemoveUser(removed_profile[0])
    setdisplayData(new_profiles)
    //console.log(new_profiles);
  }

  function ProfileList(){
     
      return (
        <SafeAreaView>
        <ScrollView style={styles.scroll_list} vertical={true}>
        {displayData.map((profile) =>{
          return(
            <ProfileBlock {...profile} id={profile.key} image={profile.imageURI} RemoveProfile = {onPressRemoveProfile} />
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
        <Text style={styles.text} >Saved Users</Text>
        <ScrollView>
        <ProfileList/>
        <StatusBar style="auto" />
        </ScrollView>
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

