import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/Header/HeaderTabs";
import RestaurantItem from "../components/Restaurant/RestaurantItem";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const YELP_API_KEY =
  "vDWTYrELOQZFM9PoN0ZvtcJg0R5z1GTpiWuXVEyYyvSumHSN0LkzozYegJO1Z1vyStcAaV_0Vh9CfOaiuPXU7FM_BDOLNnopewrHZqRoZqw11NNl1qfmfp0YE7GKYXYx";

const Home = () => {
  const apiOptions = {
    headers: {
      Authorization: "Bearer " + YELP_API_KEY,
    },
  };

  const getRestaurantDataFromYelp = () => {
    axios
      .get(
        "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego",
        apiOptions
      )
      .then((response) => setRestaurantData(response.data))
      .catch((error) => console.log(error));
  };

  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    getRestaurantDataFromYelp();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
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
