import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from "./screens/Home"
import RestaurantDetail from "./screens/RestaurantDetail"

const RootNavigation = () => {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="restaurantDetail" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
