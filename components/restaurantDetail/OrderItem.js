import React from "react";
import { StyleSheet, Text, View } from "react-native";

const OrderItem = (props) => {
  const { title, price } = props.item;
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textPrice}>{price}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  textTitle:{
    fontWeight: "600",
    fontSize: 16,
  },
  textPrice:{
    opacity: 0.7,
    fontSize: 16
  },
  container:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#299",
  }
});
