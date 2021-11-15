import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'

const RestaurantDetail = ({route}) => {
  return (
    <View style={styles.container}>
      <About route={route} />
      <Divider style={styles.divider} width={1.8} />
      <MenuItems />
    </View>
  )
}

export default RestaurantDetail

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  divider: {
    marginVertical: 20
  }
})
