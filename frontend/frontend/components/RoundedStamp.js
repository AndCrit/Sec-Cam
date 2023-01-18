import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RoundedStamp = (props) => {
  return (

    <View style={styles.rounded_container}> 
            <Text style= {[styles.text, styles.bold_text]}>{props.descriptor}</Text>
            {/** For Image */}
    </View>
  )
}

export default RoundedStamp

const styles = StyleSheet.create({
    rounded_container: {
        borderRadius: 25,
        width: 125,
        height: 50,
        backgroundColor: '#787878',
    },
    text:{
        color:'white',
        fontSize: 16,
        fontWeight: "400",
    },
    bold_text:{
        fontWeight:"700",
    },


})