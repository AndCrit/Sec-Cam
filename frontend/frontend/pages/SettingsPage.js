import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import SettingsBlock from '../components/SettingsBlock';

export default function SettingsPage(props){
  const value = {settingName: "Account Name", settingValue:"Braveler"}
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
        <SettingsBlock {...value}/>
        <SettingsBlock {...value}/>
        <SettingsBlock {...value}/>

        
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
