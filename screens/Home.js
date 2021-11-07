import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import HeaderTabs from '../components/Header/HeaderTabs'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
      <HeaderTabs />
      <SearchBar />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#eee",
    flex: 1,
  },
  tabContainer: {
    backgroundColor: "white",
    padding: 15,
  }
})
