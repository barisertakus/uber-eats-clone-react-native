import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const FoodImage = ({ food }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: food.image }} />
    </View>
  );
};

export default FoodImage;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
