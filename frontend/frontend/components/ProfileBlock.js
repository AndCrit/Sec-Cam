import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProfileBlock = () => {

const Name = "Full Name";
const AddedDate = "";

  return (
    <View>
       <View style ={styles.ProfileBox}>
      
      <Image source={{
            width: 65,
            height: 60,
            uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'}}>
      </Image>
      <Text>
          {Name}
      </Text>
      <Text>
          Date Added: {AddedDate}
      </Text>

    </View>
    </View>
  )
}

export default ProfileBlock

const styles = StyleSheet.create({
    ProfileBox: {
        flexDirection: 'row',
        backgroundColor: '#5D66A2',
        height: 100,
        width: "100%",
        borderColor: '#787878',
        borderWidth: 1,
      },

})