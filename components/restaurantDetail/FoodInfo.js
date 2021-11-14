import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FoodInfo = ({food}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{food.title}</Text>
      <Text>{food.description}</Text>
      <Text>{food.price} </Text>
    </View>
  )
}

export default FoodInfo

const styles = StyleSheet.create({
  container:{
    width:240,
    justifyContent: 'space-evenly'
  },
  title:{
    fontSize: 19,
    fontWeight: '600',
  }
})
