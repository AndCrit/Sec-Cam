import React from 'react'
import {StyleSheet, Text, Image, View, SafeAreaView, Button} from 'react-native'
import EventAlert from '../components/EventAlert'

function Home(props) {
var greeting; 

function onPressDatabase (){
  alert('Enterring Saved Database page');
  props.navigatePage(1);
}
  return (
    <View style={styles.overture_container}>
        <View style={styles.body}>
          <Text> Your Briefing {greeting} </Text>
          <View style={styles.rounded_container}/>
        </View>
        <View>
          <Text> Date </Text>
          <View style={styles.rounded_container}/>
        </View>
        <View>
          <Text> Today's Alerts </Text>
        </View>
        <EventAlert/>
        <EventAlert/>
        <EventAlert/>
        <Button
          onPress={onPressDatabase}
          title="View Saved Database"
          color="#787878"
          accessibilityLabel="Databases"
        />
       
    </View>
  )
}

const styles = StyleSheet.create({
 
  rounded_container: {
    borderRadius: 25,
    width: 125,
    height: 50,
    backgroundColor: '#787878',
  },
  overture_container: {
    backgroundColor: '#5D66A2',
    height: '100%',


  }
});

export default Home