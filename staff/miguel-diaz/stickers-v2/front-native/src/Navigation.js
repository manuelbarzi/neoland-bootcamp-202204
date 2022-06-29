import React, { useState, createContext, useContext, useEffect } from 'react'
import { View, ActivityIndicator, SafeAreaView } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { isJwtValid } from './validators';


import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator()
const AuthenticatedUserContext = createContext({})


    const [feedback, setFeedback] = useState(null)
    const navigation = useNavigation()

    useEffect(() => {
        if (isJwtValid(sessionStorage.token))
            navigation.navigate("Home")
        else
            handleUserLogout()
    }, [])

export const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    return (
        <AuthenticatedUserContext.Provider value={{ user, setUser }}>
            {children}
        </AuthenticatedUserContext.Provider>
    )
}


function MyStack() {
    return (
        <Stack.Navigator defaultScreenOptions={Home}>
            <Stack.Screen name="Home" component={HomeScreen} options={{animation: 'none'}} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{animation: 'none'}} />
        </Stack.Navigator>
    )
}

function AuthStack() {
    return (
        <Stack.Navigator defaultScreenOptions={LoginScreen}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}


export default function Navigation() {
    const {user, setUser} = useContext(AuthenticatedUserContext)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(sessionStorage.token,
            async authenticatedUser => {
                authenticatedUser ? setUser(authenticatedUser) : setUser(null)
                setLoading(false)
            }
        )
        return () => unsuscribe()
    }, [user])
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    return (
        <NavigationContainer>
            {user ?
                <MyStack />
                : <AuthStack />}
        </NavigationContainer>
    )
}