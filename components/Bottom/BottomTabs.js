import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BottomButton from './BottomButton'

const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <BottomButton icon="home" text="Home" />
      <BottomButton icon="search" text="Browse" />
      <BottomButton icon="shopping-bag" text="Grocery" />
      <BottomButton icon="receipt" text="Orders" />
      <BottomButton icon="user" text="Account" />
    </View>
  )
}

export default BottomTabs

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 30,
    justifyContent: 'space-between'
  }
})
