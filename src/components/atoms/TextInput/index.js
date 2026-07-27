import { StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";


const TextInput = ({label , placeholder}) => {
  const [fontsLoaded] = useFonts({
      "Poppins-Regular": require("../../../../assets/fonts/Poppins-Regular.ttf"),
      "Poppins-Medium": require("../../../../assets/fonts/Poppins-Medium.ttf"),
      "Poppins-Light": require("../../../../assets/fonts/Poppins-Light.ttf"),
    });
  
    if (!fontsLoaded) return null;
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder}/>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color:'#020202'
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
    
  }
})