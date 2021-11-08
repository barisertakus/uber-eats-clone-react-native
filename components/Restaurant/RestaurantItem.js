import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ResturantImage from "./ResturantImage";
import ResturantInfo from "./ResturantInfo";

const RestaurantItem = () => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} >
      <View style={styles.container}>
        <ResturantImage />
        <ResturantInfo />
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "white",
  },
  button:{
    marginBottom: 30
  }
});
