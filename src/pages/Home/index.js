import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  ProfileDummy,
} from "../../assets";
import { useFonts } from "expo-font";
import FoodCard from "../../components/molecules/FoodCard";
import { Gap } from "../../components";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

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

const Home = () => {
  const fontsLoaded = useFontsLoaded();

  if (!fontsLoaded) {
    return null;
  }

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const FirstRoute = () => (
    <View
      style={{
        backgroundColor: "#FAFAFC",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Menu Pertama</Text>
    </View>
  );

  const SecondRoute = () => (
    <View
      style={{
        backgroundColor: "#dd1378",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Menu Kedua</Text>
    </View>
  );

  const ThirdRoute = () => (
    <View
      style={{
        backgroundColor: "#13dd2e",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Menu Ketiga</Text>
    </View>
  );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const routes = [
    { key: "first", title: "New Taste" },
    { key: "second", title: "Popular" },
    { key: "third", title: "Recomended" },
  ];

  return (
    <View style={styles.page}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>Warung Online</Text>
          <Text style={styles.desc}>Let's get some foods</Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
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
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
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
    marginVertical: 24,
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
  tabContainer: {
    flex: 1,
  },
});
