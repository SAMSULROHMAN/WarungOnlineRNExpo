import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, ProfileDummy } from "../../assets";
import { useFonts } from "expo-font";
import FoodCard from "../../components/molecules/FoodCard";
import { Gap } from "../../components";

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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.foodCardContainer}>
          <Gap width={24}/>
            <FoodCard image={FoodDummy1}/>
            <FoodCard image={FoodDummy2}/>
            <FoodCard image={FoodDummy3}/>
            <FoodCard image={FoodDummy4}/>
        </View>
      </ScrollView>
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
  foodCardContainer: {
    flexDirection: "row",
    marginVertical: 24
  },
  appName: {
    fontFamily: "Poppins-Medium",
    fontSize: 22,
    color: "#020202",
  },
  desc: {
    fontSize: 14,
    fontFamily: "Poppins-Light",
    color: "#8D92A3",
  },
});
