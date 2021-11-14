import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RestaurantDescription from "./RestaurantDescription";
import RestaurantImage from "./RestaurantImage";
import RestaurantTitle from "./RestaurantTitle";

const image =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
const title = "Burger King";
const description = "Burger • Burger Food • 10$ • 5⭐ (300+)";

const About = () => {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
