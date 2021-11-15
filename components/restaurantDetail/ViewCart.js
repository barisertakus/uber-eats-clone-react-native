import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ViewCart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    zIndex: 999
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
});
