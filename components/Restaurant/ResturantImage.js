import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from "react-native-vector-icons"

const ResturantImage = ({image}) => {
  return (
    <>
    <Image
      source={{
        uri: image
      }}
      style={styles.image}
    />
    <TouchableOpacity style={styles.button}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
    </>
  );
}

export default ResturantImage

const styles = StyleSheet.create({
  image:{
    width: "100%",
    height: 180
  },
  button:{
    position: "absolute",
    right: 15,
    top: 15
  }
})
