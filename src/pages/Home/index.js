import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ProfileDummy } from "../../assets";
import { useFonts } from "expo-font";

const Home = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../../../assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>Warung Online</Text>
          <Text style={styles.desc}>Let's get some foods</Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
      <Text>Home Page</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: "white",
  },
  appName: {
    fontFamily: "Poppins-Medium",
    fontSize: 22,
    color: "#020202",
  },
  desc : {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3'
  }
});
