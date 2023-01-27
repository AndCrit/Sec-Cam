import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const NotificationBlock = (props) => {

  return (
    <View style ={styles.NotifBox}>
       <View style={styles.Photo}>
          <Image source={{
                width: "100%",
                height: "100%",
                uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'}}>
          </Image>
        </View>
    </View>
  )
}

export default NotificationBlock

const styles = StyleSheet.create({
    ProfileBox: {
        flexDirection: 'row',
        backgroundColor: '#5D66A2',
        height: 150,
        width: "100%",
        borderColor: '#787878',
        borderWidth: 1,
      },
    
    NotifBox: {
      flexDirection: 'row',
      justifyContent:"center",
      alignContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: '#535354',
      height: '50%',
      width: "100%",
      borderColor: '#787878',
      borderWidth: 2,
      borderRadius: 25,
    },
    
    Photo: {
      flexDirection: "column",
      height: 200,
      width: 150,
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