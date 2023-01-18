import React from 'react'
import {StyleSheet, Text, Image, View, SafeAreaView, Button} from 'react-native'
import EventAlert from '../components/EventAlert'
import RoundedStamp from '../components/RoundedStamp';

function Home(props) {
var greeting; 

function onPressDatabase (){
  props.navigatePage(1);
}
  return (
    <View style={styles.overture_container}>
        <View style={styles.body}>
          <View>
            <Text style={[styles.text, styles.bold_text, styles.big_text]}> Your Briefing {greeting} </Text>
            <Text style={styles.text}> Tuesday, July 20</Text>
          </View>
          <RoundedStamp descriptor="00:00pm"/>
        </View>
        
        <View style={styles.body}>
          <Text style={[styles.text, styles.big_text]}> Today's Alerts </Text>
          <RoundedStamp descriptor="Camera      Status"/>
        </View>
        <View style={styles.break}/>
        <EventAlert/>
        <EventAlert/>
        <EventAlert/>
        <Button onPress={onPressDatabase} title="View Saved Database" color="#787878" accessibilityLabel="Databases"/>
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
});

export default Home