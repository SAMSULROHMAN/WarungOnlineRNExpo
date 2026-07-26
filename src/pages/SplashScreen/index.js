import React from 'react'
import { Text, View } from 'react-native'
import { WarungLogo } from '../../assets'
import { useFonts } from 'expo-font'

const SplashScreen = () => {
    const [fontsLoaded] = useFonts({
        'Poppins': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    })

    if (!fontsLoaded) return null

    return (
        <View 
            style={{
                backgroundColor: '#FFC700', 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
            <WarungLogo />
            <View style={{ height: 38 }} />
            <Text style={{ 
                fontFamily: 'Poppins-Medium',
                fontSize: 32,
                color: '#020202',
                
             }}> WarungOnline </Text>
        </View>
    )
}

export default SplashScreen