import React from 'react'
import {StyleSheet, Text, Image, View, SafeAreaView, Button} from 'react-native'
import EventAlert from '../components/EventAlert'
import RoundedStamp from '../components/RoundedStamp';

function Home(props) {
var greeting;

let TimeRoundedStampValue = {descriptor:"Currently 00:00 pm", imageIcon:'sun'}
let CameraRoundedStampValue = {descriptor:"Camera Status", imageIcon:'on'}
function onPressDatabase (){
  props.navigatePage(1);
}
function listEvents (){
  //List the events here
}
  return (
    <View style={styles.overture_container}>
        <View style={styles.body}>
          <View>
            <Text style={[styles.text, styles.bold_text, styles.big_text]}> Your Briefing {greeting} </Text>
            <Text style={styles.text}> Tuesday, July 20</Text>
          </View>
          <RoundedStamp {...TimeRoundedStampValue}/>
        </View>
        
        <View style={styles.body}>
          <Text style={[styles.text, styles.big_text]}> Today's Alerts </Text>
          <RoundedStamp {...CameraRoundedStampValue}/>
        </View>
        <View style={styles.break}/>
        <View style={styles.eventAlerts}>
          <EventAlert EventDescription = "RemovePerson"/>
          <EventAlert EventDescription = "SecAlert"/>
          <EventAlert EventDescription = "RecogPerson"/>
        </View>
        <Button  onPress={onPressDatabase} title="View Saved Database" color="#787878" accessibilityLabel="Databases"/>
    </View>
  )
}

const styles = StyleSheet.create({
  overture_container: {
    backgroundColor: '#535354',
    height: '100%',
  },
  break: {
    height: "2.5%",
    backgroundColor: '#535354',
  },
  body: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  text:{
    color:'white',
    fontSize: 16,
    fontWeight: "400",
  },
  bold_text:{
    fontWeight:"700",
  },
  big_text:{
    fontSize: 20,
  },
  eventAlerts: {
    justifyContent:'center',
    alignItems: 'center',
  },
});

export default Home