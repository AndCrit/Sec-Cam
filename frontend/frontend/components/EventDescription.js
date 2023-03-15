import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EventDescription = (props) => {
  return (
    <View>
        <Text style= {[styles.text, styles.bold_text]}> {props.EventText}</Text>
        <Text style= {[styles.text, styles.big_text, styles.bold_text]}> {props.absTime}</Text>
    </View>
  )
}

export default EventDescription

const styles = StyleSheet.create({
    text:{
        color:'white',
        fontSize: 16,
        fontWeight: "400",
        textAlign:"center",
      },
    text_dealigner:{
        textAlign:"auto",
    },

    bold_text:{
        fontWeight:"700",
    },

    big_text:{
        fontSize: 20,
    },
})