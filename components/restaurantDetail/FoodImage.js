import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const FoodImage = ({ food, marginLeft }) => {
  return (
    <View>
      <Image style={styles(marginLeft).image} source={{ uri: food.image || undefined}} />
    </View>
  );
};

export default FoodImage;

const styles = (marginLeft) => StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: marginLeft ? marginLeft : 0,
  },
});
