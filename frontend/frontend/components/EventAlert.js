import React from 'react'
import {StyleSheet, Image, Text, View} from 'react-native'
function EventAlert(props) {
  let relTime = '30m';
  let action = {
              SecAlert:"New Securtiy Alert from front door camera",
              AddPerson:"New person added to the Image Database",
              RemovePerson:'A person has been removed from the Image Database',
              RecogPerson:"A friendly person has been recognized from"
              };
let userHistory = props.history;

  return (

    <View style ={styles.EventBox}>
      
      <Image source={{
            width: 65,
            height: 60,
            uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'}}>
      </Image>
      <Text>
          {relTime}
      </Text>
      <Text>
          {action.SecAlert}
      </Text>

    </View>
  )
}
const styles = StyleSheet.create({
  EventBox: {
    flexDirection: 'row',
    backgroundColor: '#5D66A2',
    height: 100,
    width: "100%",
    borderColor: '#787878',
    borderWidth: 1,
  },

  EventLine: {
    backgroundColor: '#5D66A2',
    flexDirection: 'row',
    height: 1,
    width: "100%",
    paddingBottom: 10,
  },

  Photo: {
    height: '100%',
    width: "33%",
    hover: '#6923dc',
  },
  
});

export default EventAlert