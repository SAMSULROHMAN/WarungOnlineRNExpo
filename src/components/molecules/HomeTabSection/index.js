import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useFonts } from "expo-font";
import ItemListFood from "../ItemListFood";
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
} from "../../../assets";

const useFontsLoaded = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../../../../assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return fontsLoaded;
};
const renderTabBar = (props) => (
  <TabBar
    {...props}
    activeColor="#020202"
    inactiveColor="#8D92A3"
    indicatorStyle={{
      backgroundColor: "#020202",
      height: 3,
      width: "15%",
      marginLeft: "3%",
    }}
    style={{ backgroundColor: "white" }}
    tabStyle={{ width: "auto" }}
    options={{
      first: { labelStyle: { fontFamily: "Poppins-Medium" } },
      second: { labelStyle: { fontFamily: "Poppins-Medium" } },
      third: { labelStyle: { fontFamily: "Poppins-Medium" } },
    }}
  />
);

const HomeTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const NewTaste = () => (
    <View style={{ paddingTop: 8 }}>
      <ItemListFood image={FoodDummy1} />
      <ItemListFood image={FoodDummy2} />
      <ItemListFood image={FoodDummy3} />
      <ItemListFood image={FoodDummy4} />
    </View>
  );

  const Popular = () => (
    <View style={{ paddingTop: 8 }}>
      <ItemListFood image={FoodDummy4} />
      <ItemListFood image={FoodDummy3} />
      <ItemListFood image={FoodDummy2} />
      <ItemListFood image={FoodDummy1} />
    </View>
  );

  const Recomended = () => (
    <View style={{ paddingTop: 8 }}>
      <ItemListFood image={FoodDummy2} />
      <ItemListFood image={FoodDummy3} />
      <ItemListFood image={FoodDummy1} />
      <ItemListFood image={FoodDummy4} />
    </View>
  );
  const renderScene = SceneMap({
    first: NewTaste,
    second: Popular,
    third: Recomended,
  });

  const routes = [
    { key: "first", title: "New Taste" },
    { key: "second", title: "Popular" },
    { key: "third", title: "Recomended" },
  ];

  const fontsLoaded = useFontsLoaded();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ height: 350 }}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
