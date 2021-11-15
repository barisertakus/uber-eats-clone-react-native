import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

const RootNavigation = () => {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="home">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="restaurantDetail" component={RestaurantDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigation;
