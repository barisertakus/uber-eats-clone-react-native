import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from "react-native-vector-icons"

const ResturantImage = () => {
  return (
    <>
    <Image
      source={{
        uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
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
    right: 30,
    top: 30
  }
})
