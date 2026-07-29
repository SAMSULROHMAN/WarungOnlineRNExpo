import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Gap, Header, TextInput } from "../../components";
import { useFonts } from "expo-font";

const SignUp = () => {
    const [fontsLoaded] = useFonts({
        "Poppins-Light": require("../../../assets/fonts/Poppins-Light.ttf"),
    });
    
    if (!fontsLoaded) return null;

    return (
    <View style={styles.page}>
        <Header title="Sign Up" subTitle="Register and Eat" onBack={() => {}} />        
        <View style={styles.container}>
            <View style={styles.photo}>    
                <View style={styles.borderPhoto}>
                    <View style={styles.photoContainer}>
                        <Text style={styles.addPhoto}>Add Photo</Text>
                    </View>
                </View>
            </View>
            <TextInput label="Full Name" placeholder="Ketikkan Nama Lengkap Kamu" />
            <Gap height={16} />
            <TextInput label="Email Address" placeholder="Ketikkan Email Address" />
            <Gap height={16} />
            <TextInput label="Password" placeholder="Ketikkan Password" />
            <Gap height={24} />
            <Button text="Lanjut" />
        </View>
    </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        backgroundColor: "white",
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1,
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: '#F0F0F0',
        padding: 20,
    },
    photo: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16
    },
    borderPhoto: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addPhoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center'
    }
});
