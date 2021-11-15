import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

const RestaurantDetail = ({route, navigation}) => {

  const { name } = route.params
  return (
    <View style={styles.container}>
      <About route={route} />
      <Divider style={styles.divider} width={1.8} />
      <MenuItems />
      <ViewCart navigation={navigation} restaurantName={name} />
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
