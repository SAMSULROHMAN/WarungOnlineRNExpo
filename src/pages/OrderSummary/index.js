import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Header, ItemListFood, ItemValue } from "../../components";
import { useFonts } from "expo-font";
import { FoodDummy6 } from "../../assets";

const OrderSummary = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text>Item Ordered</Text>
        <ItemListFood image={FoodDummy6} items={14} />
        <Text style={styles.label}>Details Transactions</Text>
        <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 1.800.390" />
        <ItemValue
          label="Total Price"
          value="IDR 390.803.000"
          valueColor="#1ABC9C"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver To :</Text>
        <ItemValue label="Name" value="Samsul Rohman" />
        <ItemValue label="Phone No." value="0822 0819 9688" />
        <ItemValue label="Address" value="Setra Duta Palima" />
        <ItemValue label="House No." value="A5 Hook" />
        <ItemValue label="City" value="Bandung" />
      </View>
      <View style={styles.button}>
        <Button
          text="Checkout Now"
          onPress={() => navigation.replace("SuccessOrder")}
        />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#020202",
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
