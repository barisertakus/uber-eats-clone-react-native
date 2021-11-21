import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  getDoc,
  serverTimestamp,
} from "@firebase/firestore";
import OrderItem from "./OrderItem";
import LottieView from "lottie-react-native";

const ViewCart = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalPrice = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol"
  });


  const saveOrder = async () => {
    setLoading(true);
    setModalVisible(false);
    const orderRef = collection(db, "orders");
    const docRef = await addDoc(orderRef, {
      items: items,
      restaurantName: restaurantName,
      createdAt: serverTimestamp(),
    });

    setTimeout(() => {
      setLoading(false);
      navigation.navigate("orderCompleted", {
        restaurantName,
        totalPrice,
      });
    }, 2500);
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantText}>{restaurantName}</Text>
            {items.map((item, i) => (
              <OrderItem key={i} item={item} />
            ))}
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>Subtotal</Text>
              <Text style={styles.subTotalPrice}>{totalPrice}</Text>
            </View>
            <View style={styles.checkoutContainer}>
              <TouchableOpacity
                style={styles.checkoutButton}
                onPress={() => saveOrder()}
              >
                <Text style={styles.checkoutText}>Checkout</Text>
                <Text style={styles.checkoutTotal}>
                  {total ? totalPrice : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(true)}
            >
              <View style={styles.buttonView}>
                <Text style={styles.text}>View Cart</Text>
              </View>

              <Text style={styles.textPrice}>{totalPrice}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View style={styles.loadingView}>
          <LottieView
            style={styles.loadingAnimation}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    zIndex: 999,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    marginRight: 30,
  },
  textPrice: {
    color: "white",
    fontSize: 20,
    position: "absolute",
    right: 20,
    top: 15
  },
  button: {
    marginTop: 20,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  buttonView:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },
  subTotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginLeft: 20,
  },
  subTotalText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
  subTotalPrice: {
    marginRight: 23,
  },
  checkoutContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  checkoutText: {
    color: "white",
    fontSize: 20,
  },
  checkoutTotal: {
    color: "white",
    position: "absolute",
    right: 20,
    top: 16,
    fontSize: 15,
  },
  loadingView: {
    backgroundColor: "black",
    position: "absolute",
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  loadingAnimation:{
    height: 200,
  }
});
