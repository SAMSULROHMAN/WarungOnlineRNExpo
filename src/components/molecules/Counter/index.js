import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IcMin, IcPlus } from "../../../assets";
import { useFonts } from "expo-font";

const Counter = () => {
    const [fontsLoaded] = useFonts({
        "Poppins-Regular": require("../../../../assets/fonts/Poppins-Regular.ttf"),
    });

    if (!fontsLoaded) return null;
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <IcMin />
            </TouchableOpacity>
            <Text style={styles.text}>14</Text>
            <TouchableOpacity>
                <IcPlus />
            </TouchableOpacity>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: "#020202",
        marginHorizontal: 10
    },
});
