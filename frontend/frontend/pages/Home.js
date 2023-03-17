import React from 'react'
import {StyleSheet, Text, Image, View, SafeAreaView, Button, ScrollView} from 'react-native'
import EventAlert from '../components/EventAlert'
import RoundedStamp from '../components/RoundedStamp';

function Home(props) {
var greeting;
const today = new Date();
console.log(today.toDateString());

let TimeRoundedStampValue = {descriptor:"Currently      "+today.toLocaleTimeString(), imageIcon:'sun'}
let CameraRoundedStampValue = {descriptor:"Camera Status", imageIcon:'on'}

const[TodaysEvents, setTodaysEvents] = React.useState 
    ([ 
        {"key":1, "notifName": "Bob", "notifDate": "Tuesday, July 29th", "notifTime":"5:30pm", "EventDesc":"RemovePerson",  "view": true},
        {"key":2, "notifName": "Bill", "notifDate": "Friday, Aug 12th", "notifTime":"7:30pm", "EventDesc":"SecAlert","view": true},
        {"key":3, "notifName": "Bob2", "notifDate": "Tuesday, July 29th", "notifTime":"5:30pm","EventDesc":"RecogPerson", "view": true},
        
      ]);
const[notifs, setNotifList] = React.useState([]);


function onPressDatabase (){
  props.navigatePage(1);
}

//To filter todays
function filterTodays(){
  const new_TodaysEvents = notifs.filter((TE) => TE.notifDate !== today.toDateString());
  setTodaysEvents(new_TodaysEvents)
}


function onPressDismissAlert(id){
  console.log("id");
  const new_TodaysEvents = TodaysEvents.filter((TE) => TE.key !== id);
  setTodaysEvents(new_TodaysEvents)
  //Call Axios Functions
}

function TodaysEventList(){
  return (
    <SafeAreaView>
    <ScrollView style={styles.scroll_list} vertical={true}>
    {
    
    TodaysEvents.map((TE) =>{
        return(
          <EventAlert {...TE} id={TE.key} DismissAlert = {onPressDismissAlert} />
        );
     
    })}
  </ScrollView>
  </SafeAreaView>
  );
}

  return (
    <SafeAreaView style={styles.overture_container}>
        <View style={styles.body}>
          <View>
            <Text style={[styles.text, styles.bold_text, styles.big_text]}> Your Briefing {greeting} </Text>
            <Text style={styles.text}> {today.toDateString()} </Text>
          </View>
          <RoundedStamp {...TimeRoundedStampValue}/>
        </View>
        
        <View style={styles.body}>
          <Text style={[styles.text, styles.big_text]}> Today's Alerts </Text>
          <RoundedStamp {...CameraRoundedStampValue}/>
        </View>
        <View style={styles.break}/>
        <View style={styles.eventAlerts}>
          <TodaysEventList/>
        </View>
        <Button  onPress={onPressDatabase} title="View Saved Database" color="#787878" accessibilityLabel="Databases"/>
    </SafeAreaView>
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