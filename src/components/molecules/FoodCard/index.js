import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IcStar, IcStarOff } from "../../../assets";
import { useFonts } from "expo-font";
import Rating from "../Rating";

const FoodCard = ({image}) => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../../../../assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <Image source={image} style={ styles.image }/>
      <View style={styles.content}>
        <Text style={styles.titleText}>Cherry Healty</Text>
        <Rating />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 24
  },
  content: {
    padding: 12
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover'
  },
  titleText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#020202",
  },
});
