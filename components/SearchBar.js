import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "react-native-vector-icons";

const SearchBar = () => {
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
        renderLeftButton={() => (
          <View style={styles.searchLeftBtn}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
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
  searchLeftBtn:{
    marginLeft: 10
  }
});
