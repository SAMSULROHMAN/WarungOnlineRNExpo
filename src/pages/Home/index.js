import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from "../../assets";
import { useFonts } from "expo-font";
import {
  FoodCard,
  HomeProfile,
  HomeTabSection,
} from "../../components/molecules";
import { Gap } from "../../components";

// Fonts
const useFontsLoaded = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../../../assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return fontsLoaded;
};

const Home = () => {
  const fontsLoaded = useFontsLoaded();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              <FoodCard image={FoodDummy1} />
              <FoodCard image={FoodDummy2} />
              <FoodCard image={FoodDummy3} />
              <FoodCard image={FoodDummy4} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  foodCardContainer: {
    flexDirection: "row",
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
