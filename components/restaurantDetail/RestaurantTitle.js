import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RestaurantTitle = ({title}) => {
  return (
    <Text style={styles.text}>{title}</Text>
  );
}

export default RestaurantTitle

const styles = StyleSheet.create({
  text:{
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 15,
  }
})
