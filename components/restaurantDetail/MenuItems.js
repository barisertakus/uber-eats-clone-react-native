import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import FoodImage from "./FoodImage";
import FoodInfo from "./FoodInfo";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "../../redux/actions/cartAction";

const MenuItems = ({ restaurantName, foods, hideCheckbox }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isItInCard = (food, cartItems) => {
    return cartItems.find((item) => item.title === food.title);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, i) => (
        <View key={i}>
          <View style={styles.menuItem}>
            {!hideCheckbox ? (
              <BouncyCheckBox
                iconStyle={styles.checkbox}
                fillColor="green"
                onPress={(value) =>
                  dispatch(selectItem(food, restaurantName, value))
                }
                isChecked={isItInCard(food, cartItems)}
              />
            ) : (
              <></>
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" style={styles.divider} />
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  divider: {
    marginHorizontal: 20,
  },
  checkbox: {
    borderColor: "lightgray",
    borderRadius: 0,
  },
});
