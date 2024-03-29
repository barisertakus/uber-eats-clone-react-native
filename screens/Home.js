import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/Header/HeaderTabs";
import RestaurantItem from "../components/home/Restaurant/RestaurantItem";
import SearchBar from "../components/home/SearchBar";
import axios from "axios";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/Bottom/BottomTabs";
import { SafeAreaView } from "react-native-safe-area-context";


const YELP_API_KEY =
  "vDWTYrELOQZFM9PoN0ZvtcJg0R5z1GTpiWuXVEyYyvSumHSN0LkzozYegJO1Z1vyStcAaV_0Vh9CfOaiuPXU7FM_BDOLNnopewrHZqRoZqw11NNl1qfmfp0YE7GKYXYx";

const Home = ({navigation}) => {
  const [city, setCity] = useState("Los Angeles");
  const [restaurantData, setRestaurantData] = useState([]);
  const [activeTab, setActiveTab] = useState("Delivery");


  const changeCity = (newCity) => {
    setCity(newCity);
  }

  const apiOptions = {
    headers: {
      Authorization: "Bearer " + YELP_API_KEY,
    },
  };
  
  const getRestaurantDataFromYelp = () => {
    axios
      .get(
        `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`,
        apiOptions
      )
      .then((response) => {
        setRestaurantData(
          response.data.businesses.filter((bussiness) =>
            bussiness.transactions.includes(activeTab.toLowerCase())
          )
        );
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRestaurantDataFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar changeCity={changeCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
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
