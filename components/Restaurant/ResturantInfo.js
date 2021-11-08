import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ResturantInfo = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Burger King</Text>
        <Text style={styles.time}>30-40 • min</Text>
      </View>

      <View style={styles.point}>
        <Text>4.5</Text>
      </View>
    </View>
  );
};

export default ResturantInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
  },
  time: {
    fontSize: 13,
    color: "gray",
  },
  point: {
    backgroundColor: "#ddd",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",    
    borderRadius: 15
  },
});
