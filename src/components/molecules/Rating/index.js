import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IcStar, IcStarOff } from "../../../assets";

const Rating = () => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        <IcStar />
        <IcStar />
        <IcStar />
        <IcStar />
        <IcStarOff />
      </View>
      <Text>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
  },
  starContainer: {
    flexDirection: "row",
  },
});
