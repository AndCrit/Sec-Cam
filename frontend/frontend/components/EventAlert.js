import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import EventDescription from './EventDescription';

const EventAlert = (props) => {

  
  let action = {
              SecAlert:"New Securtiy Alert \n" + "from camera ",
              AddedUser:"New person added to the Image Database",
              RemovePerson:'A person has been removed from the Image Database',
              RecogPerson:"A friendly person has been recognized",
              SecAdd: "Click Upload to view more pictures about this person"
              };

  var name = props.notifName;
  const Eventinfo = {};

  function onDismissButtonPress(id){
    props.DismissAlert(id)
  }
  function onPressNotifButton(){
    props.NotifPage()
  }

  function DetermineEvent(){
    
    Eventinfo.EventText = action[props.EventDesc];
    Eventinfo.absTime = props.notifTime;   
    return <EventDescription {...Eventinfo}/>
  }

  return (
    <TouchableOpacity onPress={() => onPressNotifButton()}>
      <View style ={styles.EventBox}>
        <View style={styles.Photo}>
            <Image source={{
                  width: 90,
                  height: 90,
                  uri : props.imageURI}} >
            </Image>
          </View>
        <View style={styles.Profile_Text}>
            <DetermineEvent/>
        </View>
        <View style={styles.Profile_Buttons}>
          
          <View style={styles.Profile_Buttons_Top}>
            <TouchableOpacity onPress={() => onDismissButtonPress(props.id)}>
              <Image style={styles.IconContainer} source={require('../assets/Bin.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '100%',
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