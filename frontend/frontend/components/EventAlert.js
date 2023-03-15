import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import EventDescription from './EventDescription';

const EventAlert = (props) => {

  
  let action = {
              SecAlert:"New Securtiy Alert \n" + "from camera ",
              AddPerson:"New person added to the Image Database",
              RemovePerson:'A person has been removed from the Image Database',
              RecogPerson:"A friendly person has been recognized"
              };

  var name = props.notifName;
  const Eventinfo = {};

  function onDismissButtonPress(id){
    props.DismissAlert(id)
  }

  function DetermineEvent(){
    
    Eventinfo.EventText = action[props.EventDesc];
    Eventinfo.absTime = props.notifTime;   
    return <EventDescription {...Eventinfo}/>
  }
  function onPressCheck(){
    let Check = true;
  }
  function onPressMenu(){
    let Menu = true;
  }
  let userHistory = props.history;

  return (
    <View style ={styles.EventBox}>
       <View style={styles.Photo}>
          <Image source={{
                width: 90,
                height: 90,
                uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'}}>
          </Image>
        </View>
      <View style={styles.Profile_Text}>
          <DetermineEvent/>
      </View>
      <View style={styles.Profile_Buttons}>
        
        <View style={styles.Profile_Buttons_Top}>
          <TouchableOpacity onPress={() => onDismissButtonPress(props.id)}>
            <Image style={styles.IconContainer} source={require('../assets/Checkmark.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.Profile_Buttons_Bottom}>
          <TouchableOpacity onPress={null}>
            <Image style={styles.Image1} source={require('../assets/3_Dot_Menu_Icon.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={null}>
            <Image style={styles.Image1} source={require('../assets/Bin.png')}/>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default EventAlert

const styles = StyleSheet.create({
    ProfileBox: {
        flexDirection: 'row',
        backgroundColor: '#5D66A2',
        height: 150,
        width: "100%",
        borderColor: '#787878',
        borderWidth: 1,
      },
    
    EventBox: {
      flexDirection: 'row',
      justifyContent:"space-between",
      alignContent: "center",
      alignItems: "center",
      backgroundColor: '#535354',
      height: 125,
      width: "95%",
      borderColor: '#787878',
      borderWidth: 2,
      borderRadius: 25,
    },
    
    Photo: {
      flexDirection: "column",
      height: '90%',
      width: "33%",
      alignItems: 'center',
      justifyContent: 'center',
    },

    Profile_Text: {
      width:"50%",
      height:"75%",
      justifyContent: 'flex-start',
      alignItems: "flex-start",
    },

    Profile_Buttons_Top:{
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '50%',
    },

    Profile_Buttons_Bottom: {
      height: '50%',
      flexDirection:'row',
      justifyContent: 'flex-start',
      alignItems:'flex-end',
    },
    Profile_Buttons: {
      width: '15%',
      height: '80%',
      
    },

    text:{
      color:'white',
      fontSize: 16,
      fontWeight: "400",
      textAlign:"flex-start",
    },

    IconContainer:{
      height: 50,
      width: 50,
      tintColor: 'white',
    },
  
  
    text_dealigner:{
      textAlign:"auto",
    },
  
    bold_text:{
      fontWeight:"700",
    },

    big_text:{
      fontSize: 20,
    },

})