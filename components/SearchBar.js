import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons,AntDesign } from "react-native-vector-icons";

const SearchBar = () => {
  const searchLeft = (
    <View style={styles.searchLeft}>
      <Ionicons name="location-sharp" size={24} />
    </View>
  );

  const searchRight = (
  <View style={styles.searchRight}>
    <AntDesign name="clockcircle" size={11} style={styles.searchRightIcon} />
    <Text>Search</Text>
  </View>);
  return (
    <View style={styles.searchBar}>
      <GooglePlacesAutocomplete
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        placeholder="Search"
        renderLeftButton={() => searchLeft}
        renderRightButton={() => searchRight}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 15,
    flexDirection: "row",
  },
  searchLeft: {
    marginLeft: 10,
  },
  searchRight:{
    flexDirection: "row",
    marginRight: 8,
    backgroundColor: "white",
    padding: 9,
    borderRadius: 30,
    alignItems: "center",
  },
  searchRightIcon:{
    marginRight: 6,
  }
});
