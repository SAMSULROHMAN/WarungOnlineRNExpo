import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IcHome, IcHomeOff, IcOrder, IcOrderOff, IcProfile, IcProfileOff, } from "../../../assets";

const BottomNavigator = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const Icon = ({ label, focus}) => {
    switch(label) {
      case 'Home' :
        // Icon Home
        return focus ? <IcHome /> : <IcHomeOff />
      case 'Order' :
        // Icon Order
        return focus ? <IcOrder /> : <IcOrderOff />
      case 'Profile' :
        // Icon Profile
        return focus ? <IcProfile /> : <IcProfileOff />
      default:
        return <IcOrder />
    }
  }

  return (
    <View
      style={[styles.container, { paddingBottom: Math.max(insets.bottom, 13) }]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon label={label} focus={isFocused}/>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingTop: 15,
    paddingHorizontal: 50,
    justifyContent: "space-between",
  },
});
