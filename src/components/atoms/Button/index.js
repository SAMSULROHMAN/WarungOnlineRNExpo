import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const Button = ({ text, color = "#FFC700", textColor = "#020202", onPress }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../../../../assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  text: (color) => ({
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: color,
    textAlign: "center",
  }),
});
