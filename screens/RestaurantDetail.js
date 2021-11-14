import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'

const RestaurantDetail = () => {
  return (
    <View>
      <About />
      <Divider style={styles.divider} width={1.8} />

    </View>
  )
}

export default RestaurantDetail

const styles = StyleSheet.create({
  divider: {
    marginVertical: 20
  }
})
