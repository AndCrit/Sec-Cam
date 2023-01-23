import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileBlock = () => {

let Name = "Full Name of the Profile";
let AddedDate = "";
let PhoneNumber = "416-888-8888"
let AdditionalInfo = "A couple sentences about this person"

  return (
    <View style ={styles.EventBox}>
       <View style={styles.Photo}>
          <Image source={{
                width: "100%",
                height: "100%",
                uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'}}>
          </Image>
        </View>
      <View style={styles.Profile_Text}>
          <Text style={styles.bold_text}> {Name} </Text>
          <Text> Added: {AddedDate} </Text>
          <Text> Phone #: {PhoneNumber} </Text>
          <Text> Addtional Info: {AdditionalInfo}</Text>
      </View>
      <View style={styles.Profile_Buttons}>
        
        <View style={styles.Profile_Buttons_Top}>
          <TouchableOpacity onPress={null}>
            <Image style={styles.IconContainer} source={require('../assets/Edit.png')}/>
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
      height: '90%',
      width: "33%",
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