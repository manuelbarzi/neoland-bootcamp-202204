import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Constants from 'expo-constants'

import Welcome from './Welcome'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Activity from './Activity'
import Dashboard from './demo/Dashboard'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Main = () => {
    
    const Stack = createNativeStackNavigator();


    return (
    <View style={ styles.base }>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Dashboard} />
                {/* <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Activity" component={Activity} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Register" component={Register} /> */}
                
            </Stack.Navigator>
        </NavigationContainer>
    </View>
    )
}

export default Main

const styles = StyleSheet.create({
    base: {
        marginTop: Constants.statusBarHeight,
    }
})