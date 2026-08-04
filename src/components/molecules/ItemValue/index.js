import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const ItemValue = ({label, value}) => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3'
  },
  value:{
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202'
  }
});
