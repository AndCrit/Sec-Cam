import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const NotificationBlock = (props) => {

  var name = props.notifName;
  var notifDate = props.notifDate
  var notifTime = props.notifTime

  function onPressUploadButton(){
    props.UploadPhoto()
  }

  function onDismissButtonPress(id){
    props.DismissAlert(id)
  }

  return (

    <View style ={styles.NotifBox}>
       <View style={styles.Photo}>
          <Image source={{
                width: "100%",
                height: "100%",
                uri : props.imageurl}}>
          </Image>
        </View>
        <View style={styles.Text_Container}>
          <View style={styles.Text_line1}>
            <Text style={[styles.text, styles.bold_text]}>{notifDate}</Text>
            <View style={styles.Text_line1_right}>
            <Text style={[styles.text, styles.bold_text]}> {notifTime} </Text>
              <TouchableOpacity onPress={null}>
                <Image style={styles.Image1} source={require('../assets/3_Dot_Menu_Icon.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
          <Text style={[styles.text, styles.bold_text]}>  Sec Alert: {name} </Text>

          <View style={styles.button_layout}>
            <TouchableOpacity onPress={onPressUploadButton}>
              <View style={styles.notifButton}>
                <Text style={[styles.text, styles.bold_text]}> Upload Photo</Text>
                <Image style={styles.Image1} source={require('../assets/SaveIcon.png')}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDismissButtonPress(props.id)}>
              <View style={styles.notifButton}>
                <Text style={[styles.text, styles.bold_text]}> Dismiss Alert</Text>
                <Image style={styles.Image1} source={require('../assets/Checkmark.png')}/>
              </View>
            </TouchableOpacity>
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
      flexDirection: 'column',
      justifyContent:"center",
      alignItems: "center",
      backgroundColor: '#535354',
      height: 300,
      width: "100%",
      borderColor: '#787878',
      borderWidth: 2,
      borderRadius: 25,
      
    },
    Text_Container:{
      justifyContent:'center',
      flexDirection: "column",
      width: '80%'

    },
    Text_line1:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%'
      
    },
    Text_line1_right:{
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'stretch',
      width:'50%',
      
    },
    Photo: {
      flexDirection: "column",
      height: '50%',
      width: "75%",
      backgroundColor:'white',
    },

    button_layout: {
      marginTop: 30,
      width: '100%',
      height: '15%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignContent: 'flex-start',
      alignItems: 'flex-start',
      
    },
    notifButton: {
      flexDirection: 'row',
      
      backgroundColor: '#787878',
      width: 175,
      height: '100%',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    button_text: {
     color: 'white',
    },


    text:{
      color:'white',
      fontSize: 16,
      fontWeight: "400",
      
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