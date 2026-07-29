import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { SplashScreen, SignIn } from "./pages";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./redux";

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
