import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const RestaurantImage = ({image}) => {
  return (
    <Image style={styles.image} source={{uri: image}} />
  )
}

export default RestaurantImage

const styles = StyleSheet.create({
  image:{
    width: "100%",
    height: 180
  }
})
