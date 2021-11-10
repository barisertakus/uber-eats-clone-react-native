import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "react-native-vector-icons";

const BottomButton = ({ icon, text }) => {
  return (
    <TouchableOpacity>
      <FontAwesome5 name={icon} style={styles.icon} size={24} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  container: {},
  icon: {
    marginBottom: 3,
    alignSelf: "center",
  },
});
