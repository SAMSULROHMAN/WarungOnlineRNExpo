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
import { useNavigation } from "@react-navigation/native";

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
    style={{
      backgroundColor: "white",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: "#F2F2F2",
      borderBottomWidth: 1,
    }}
    tabStyle={{ width: "auto" }}
    options={{
      first: { labelStyle: { fontFamily: "Poppins-Medium" } },
      second: { labelStyle: { fontFamily: "Poppins-Medium" } },
      third: { labelStyle: { fontFamily: "Poppins-Medium" } },
    }}
  />
);

const OrderTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const InProgress = () => {
    const navigation = useNavigation();
    return (
      <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
        <ItemListFood 
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate("OrderDetail")}
          type="in-progress"
          items={3}
          price="2.000.000"
          name="Soup Bumil"
        />
        <ItemListFood 
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate("OrderDetail")}
          type="in-progress"
          items={3}
          price="2.000.000"
          name="Soup Bumil"
        />
        <ItemListFood 
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate("OrderDetail")}
          type="in-progress"
          items={3}
          price="2.000.000"
          name="Soup Bumil"
        />
        <ItemListFood 
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate("OrderDetail")}
          type="in-progress"
          items={3}
          price="2.000.000"
          name="Soup Bumil"
        />
      </View>
    );
  };

  const PastOrders = () => {
    const navigation = useNavigation();
    return (
      <View style={{ paddingTop: 8 , paddingHorizontal: 24}}>
        <ItemListFood 
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate("OrderDetail")}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Soup Bumil"
          date="Jun 12, 14:00"
        />
        <ItemListFood 
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate("OrderDetail")}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Soup Bumil"
          date="Jun 12, 14:00"
          status="Cancel"
        />
        <ItemListFood 
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate("OrderDetail")}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Soup Bumil"
          date="Jun 12, 14:00"
          status=""
        />
        <ItemListFood 
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate("OrderDetail")}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Soup Bumil"
          date="Jun 12, 14:00"
          status="Cancel"
        />
      </View>
    );
  };

  const renderScene = SceneMap({
    first: InProgress,
    second: PastOrders,
  });

  const routes = [
    { key: "first", title: "In Progress" },
    { key: "second", title: "Past Orders" },
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
      style={{ height: 350, backgroundColor: "white" }}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
