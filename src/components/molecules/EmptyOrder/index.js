import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Gap } from "../../atoms";
import { useFonts } from "expo-font";
import { IlOrderEmpty } from "../../../assets";
import { useNavigation } from "@react-navigation/native";

const EmptyOrder = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("../../../../assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.page}>
      <IlOrderEmpty />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Find Foods"
          onPress={() => navigation.replace("MainApp")}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    color: "#020202",
  },
  subTitle: {
    fontSize: 14,
    fontFamily: "Poppins-Light",
    color: "#8D92A3",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 80,
  },
});
