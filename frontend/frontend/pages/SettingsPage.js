import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import SettingsBlock from '../components/SettingsBlock';

export default function SettingsPage(props){
  const value = {settingName: "Account Name", settingValue:"Braveler"}
  const[Settings, onChangeSetting] = React.useState 
    ([ 
        {"key":1, "settingName": "Account Name", "settingValue": "Braveler"},
        {"key":2, "settingName": "Camera", "settingValue": "Friday, Aug 12th"},
        {"key":3, "settingName": "Age", "settingValue": "22"},
        {"key":4, "settingName": "Camera Location", "settingValue": "Laconia"},
        {"key":5, "settingName": "Camera Serial Number", "settingValue": "#4321212312"},
        
      ]);
      
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
        <View>
          <Text style={[styles.text, styles.big_text, styles.bold_text]}>Hello!</Text>
          <Text style = {styles.text}>
              Want to edit your profile? Change your preferences? {"\n"}You can do it all here
          </Text>
        </View>
      </View>
      <View style={styles.overview_container}>
        <SettingsList/>
        

        
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
