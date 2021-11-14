import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RestaurantDescription from "./RestaurantDescription";
import RestaurantImage from "./RestaurantImage";
import RestaurantTitle from "./RestaurantTitle";

const About = ({ route }) => {
  const { name, image, price, reviews, rating, categories } =
    route.params;

  const formattedCategories = categories
    .map((category) => category.title)
    .join(" • ");

  const description =
    formattedCategories +
    (price ? " • " + price : "") +
    " • " +
    rating +
    " ⭐ " +
    `(${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
