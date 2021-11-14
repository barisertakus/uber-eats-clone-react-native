import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HeaderButton = (props) => {

  return (
    <TouchableOpacity style={styles(props).button}
    onPress={() => props.setActiveTab(props.text)}>
      <Text style={styles(props).text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = (props) => StyleSheet.create({
  button: {
    backgroundColor: props.activeTab === props.text ? 'black' : 'white',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30
  },
  text: {
    color: props.activeTab === props.text ? 'white' : 'black',
    fontSize: 15,
    fontWeight: '900'
  },
});
