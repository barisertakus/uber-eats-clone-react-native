import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderButton from "./HeaderButton";

const HeaderTabs = ({activeTab, setActiveTab}) => {
  return (
    <View style={styles.buttonContainer}>
      <HeaderButton
        text="Delivery"
        color="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        color="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
