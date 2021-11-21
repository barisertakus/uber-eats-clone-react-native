import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import MenuItems from "../components/restaurantDetail/MenuItems";
import { ScrollView } from "react-native";

const OrderCompleted = ({ route }) => {
  const { restaurantName, totalPrice } = route.params;
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "",
        description: "",
        price: "",
        image: "",
      },
    ],
  });
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "orders"), orderBy("createdAt", "desc"), limit(1)),
      (snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      }
    );

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.completedContainer}>
        <LottieView
          style={styles.lottieCheck}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={true}
        />
        <Text style={styles.restaurantName}>
          Your order at {restaurantName} has been placed for {totalPrice}
        </Text>
        <ScrollView style={styles.itemsContainer}>
          <MenuItems foods={lastOrder.items} hideCheckbox marginLeft={8}/>
        </ScrollView>

        <LottieView
          style={styles.lottieCooking}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  completedContainer: {
    margin: 15,
    alignItems: "center",
  },
  lottieCheck: {
    height: 100,
    alignSelf: "center",
    marginBottom: 30,
  },
  lottieCooking: {
    height: 200,
    alignSelf: "center",
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemsContainer: {
    maxHeight: "55%",
  },
});
