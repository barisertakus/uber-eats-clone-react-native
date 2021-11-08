import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/Header/HeaderTabs";
import RestaurantItem from "../components/Restaurant/RestaurantItem";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
  },
  tabContainer: {
    backgroundColor: "white",
    padding: 15,
  },
});
