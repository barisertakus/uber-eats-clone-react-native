import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ResturantImage from "./ResturantImage";
import ResturantInfo from "./ResturantInfo";

const RestaurantItem = ({ restaurantData }) => {
  const restaurants = restaurantData ? restaurantData.businesses : [];

  return (
    <View style={styles.container}>
      {restaurants.map((restaurant) => (
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.restaurantCard} key={restaurant.id}>
            <ResturantImage image={restaurant.image_url} />
            <ResturantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantCard: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "white",
  },
  container: {
    marginBottom: 30,
  },
});
