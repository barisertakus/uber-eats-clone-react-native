import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RestaurantDescription = ({ description }) => {
  return (
    <Text style={styles.text}>{description}</Text>
  );
};

export default RestaurantDescription;

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: "400",
    fontSize: 15.5,
  },
});
