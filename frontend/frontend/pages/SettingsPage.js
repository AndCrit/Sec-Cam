import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import SettingsBlock from '../components/SettingsBlock';

export default function SettingsPage(props){

      function SettingsList(){
      
        return (
          <SafeAreaView>
          <ScrollView  >
          {Settings.map((setting) =>{
            return(
              <SettingsBlock {...setting}/>
            );
          })}
        </ScrollView>
        </SafeAreaView>
        );
      }


  return (
    <>
      <View style={styles.overture_container}>
        <View style= {{marginBottom:10,}}>
          <Text style={[styles.text, styles.big_text, styles.bold_text]}>Hello!</Text>
          <Text style = {styles.text}>
              Thanks for using our app {"\n"} Shout out to all of the team members below
          </Text>
        </View>
      </View>
      <View style={styles.overview_container}>
        <Text style={[styles.text, styles.big_text, styles.bold_text]}>
          Ankit Misra
        </Text>
        <Text style={[styles.text, styles.big_text, styles.bold_text]}>
          Vincent To
        </Text>
        <Text style={[styles.text, styles.big_text, styles.bold_text]}>
          Jordan Lavallee
        </Text>
        <Text style={[styles.text, styles.big_text, styles.bold_text]}>
          Imran Warfa
        </Text>
        {/** TODO: Figure out some mapping for the settings */}
      </View>
    </>
    
  )
}



const styles = StyleSheet.create({
  overture_container: {
    flexDirection: 'row',
    backgroundColor: '#535354',
    height: '12%',
    width: '100%',
    justifyContent: "center",
    alignContent: 'center',
    alignItems:"center",
    
  },
  overview_container:{
    backgroundColor: '#242524',
    height: '100%',
  },
  overture_textbox:{
    
  },
  text:{
    margin:20,
    color:'white',
    fontSize: 16,
    fontWeight: "500",
    textAlign:"center",

  },
  bold_text:{
    fontWeight:"700",
  },
  big_text:{
    fontSize: 28,
    
  },
});
