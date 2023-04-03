import React from 'react'
import {StyleSheet, Text, Image, View, SafeAreaView, Button, ScrollView} from 'react-native'
import EventAlert from '../components/EventAlert'
import RoundedStamp from '../components/RoundedStamp';
import {firebase} from '../backend/config'

function Home(props) {
var greeting;
const today = new Date();
console.log(today.toDateString());

let TimeRoundedStampValue = {descriptor:"Currently      "+today.toLocaleTimeString(), imageIcon:'sun'}
let CameraRoundedStampValue = {descriptor:"Camera Status", imageIcon:'on'}

const[TodaysEvents, setTodaysEvents] = React.useState 
    ([ 
      {"key":1, "notifName": "Bob", "notifDate": "Sun Apr 02 2023", "notifTime":"5:30pm", "EventDesc":"RemovePerson", "image": "bob.image"},
      {"key":2, "notifName": "Bill", "notifDate": "Friday, Aug 12th", "notifTime":"7:30pm", "EventDesc":"SecAlert"},
      {"key":3, "notifName": "Bob2", "notifDate": "Tuesday, July 29th", "notifTime":"5:30pm","EventDesc":"RecogPerson"},
      {"key":4, "notifName": "Bob2", "notifDate": "Tuesday, July 29th", "notifTime":"5:30pm","EventDesc":"RecogPerson"},
    ]);

const[notifs, setNotifList] = React.useState([{}]);
const[count, setCount] = React.useState(-5);
const[load, setLoad] = React.useState(-1);
function onPressDatabase (){
  props.navigatePage(1);
}

//This function deals the damage
function filterTodays() {
  console.log("Filtering");
  console.log(count);
  
  const filteredList = TodaysEvents.filter(item => item.notifDate === today.toDateString());
  
  console.log(TodaysEvents)
  console.log("in here");
  console.log(filteredList);
  setTodaysEvents(filteredList);
  setCount(0);
  
}
async function loadJsons(){
  //Get JSON
  let fileRef = firebase.storage().ref().child('StationD1.json')
  const notifData = []
  if(load<0){
  await fileRef
    .getDownloadURL()
    .then((url) => {
      console.log(url);
      const result = fetch(url).then(response => response.json())
      .then(data => {
        console.log(data)
          setLoad(0);
          setTodaysEvents(data);
          console.log("Updated Data")
          //filterTodays();
      });
    })
    .catch((e) => console.log('deeeee => ', e));
}
  
}
loadJsons();
//filterTodays();



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
          <Text style={[styles.text, styles.big_text]}> Camera Alerts </Text>
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