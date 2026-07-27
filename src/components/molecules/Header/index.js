import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const Header = ({title, subTitle}) => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../../../../assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom:24, 
  },
  title: {
    fontSize: 22,
    fontFamily: "Poppins-Medium",
    color: "#020202s",
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color:'#8D92A3'
  }
});
