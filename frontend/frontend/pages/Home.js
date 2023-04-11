import React from 'react'
import {StyleSheet, Text, Image, View, SafeAreaView, Button, ScrollView} from 'react-native'
import EventAlert from '../components/EventAlert'
import RoundedStamp from '../components/RoundedStamp';
import {firebase} from '../backend/config'

function Home(props) {
var greeting;
const today = new Date();
//console.log(today.toDateString());

let TimeRoundedStampValue = {descriptor:"Currently      "+today.toLocaleTimeString(), imageIcon:'sun'}
let CameraRoundedStampValue = {descriptor:"Camera Status", imageIcon:'on'}

const[notifs, setNotifs] = React.useState([]);
const[count, setCount] = React.useState(-5);
const[load, setLoad] = React.useState(-1);
function onPressDatabase (){
  props.navigatePage(1);
}

//This function deals the damage
function filterTodays() {
  //console.log("Filtering");
 // console.log(count);
  
  const filteredList = notifs.filter(item => item.notifDate === today.toDateString());
  
  //console.log(notifs)
  //console.log("in here");
  //console.log(filteredList);
  setNotifs(filteredList);
  setCount(0);
  
}
//Get JSON from Server
async function loadJsons(){
  let fileRef = firebase.storage().ref().child('StationD1.json')
  const notifData = []
  if(load<0){
    await fileRef
      .getDownloadURL()
      .then((url) => {
        //console.log(url);
        const result = fetch(url).then(response => response.json())
        .then(data => {
          //console.log(data)
            setLoad(0);
            setNotifs(data);
            console.log("Updated Data")
            //filterTodays();
        });
      })
      .catch((e) => console.log('deeeee => ', e));
  }
}
loadJsons();
if(notifs<1){
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
  </SafeAreaView>

}

async function dismissAlert(id, notif){
  let userRequest = {... notif, "type":"remNotif"};
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
  console.log(userRequest)
}

function onPressDismissAlert(id){
  //Filter all notifs without removed one
  const new_notif = notifs.filter((notif) => notif.key !== id);
  //Filter removed notif
  const removed_notif = notifs.filter((notif) => notif.key === id);
  //Call Http Functions to tell server to delete alert
  dismissAlert(id, removed_notif[0]);
  //Update
  setNotifs(new_notif);
 // console.log(removed_notif);
}

function onPressNotifPage(){
  props.navigatePage(4);
}

function TodaysEventList(){
  return (
    <SafeAreaView>
    <ScrollView style={styles.scroll_list} vertical={true}>
    {
    notifs.map((TE) =>{
        return(
          <EventAlert {...TE} id={TE.key} DismissAlert = {onPressDismissAlert} NotifPage = {onPressNotifPage} />
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