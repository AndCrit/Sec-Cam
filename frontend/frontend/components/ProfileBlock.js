import { StyleSheet,  KeyboardAvoidingView, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileBlock = (props) => {
  function onRemoveButtonPress(id, action){
    console.log(id);
    props.RemoveProfile(id, action)
  }

  return (
    <View style ={styles.EventBox}>
      <View style={styles.Photo}>
        <Image source={{
                width: "90%",
                height: "90%",
                uri : props.imageURI}} 
                style={styles.Photo_Effects}>
        </Image>
      </View>
      <View style={[styles.Profile_Text]}>
          <Text style={[styles.text, styles.bold_text]}> {props.ProfileName} </Text>
          <Text style={styles.text}> Added: {props.ProfileAddedDate} </Text>
          <Text style={styles.text}> Phone #: {props.PhoneNumber} </Text>
          <Text style={styles.text}> Addtional Info: {props.AdditionalInfo}</Text>
      </View>
      <View style={styles.Profile_Buttons}>
        <View style={styles.Profile_Buttons_Top}>
          <TouchableOpacity onPress={() => onRemoveButtonPress(props.id, false)}>
          <Image style={styles.IconContainer} source={require('../assets/Checkmark.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.Profile_Buttons_Top}>
          <TouchableOpacity onPress={() => onRemoveButtonPress(props.id, true)}>
            <Image style={styles.IconContainer} source={require('../assets/Bin.png')}/>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default ProfileBlock

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
      height: 150,
      width: "100%",
      borderColor: '#787878',
      borderWidth: 2,
      borderRadius: 25,
    },
    
    Photo: {
      flexDirection: "column",
      flexDirection: 'row',
      justifyContent: 'center',
      height: '80%',
      width: "33%",
      
    },
    Photo_Effects: {
      borderRadius: 25,
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
      tintColor: 'grey',
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