import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View style={styles.category} key={index}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.header}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container:{
    marginTop: 5,
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingLeft: 20
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  header: {
    fontSize: 13,
    fontWeight: "900",
  },
  category: {
    alignItems: "center",
    marginRight: 30,
  },
});
