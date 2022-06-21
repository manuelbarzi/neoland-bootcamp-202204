import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Dimensions} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Constants from 'expo-constants'
import theme from '../theme.js'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
//  inonicons
// thumbs-up-sharp
// import {'dotenv'} from 'config'


const Dashboard = ( {navigation} ) => {

    const [view, setView] = useState("Home")
    const [back, setBack] = useState(null)


    const handleHomePress = () => {
        setView("Home")
    }
    const handleRegisterPress = () => {
        navigation.navigate('Activity')
    }
    const handleYouPress = () => {
        setView("You")
    }
    const handlePressSettings = () => {
        setView("Settings")
        setBack("You")
    }
    const handlePressBack = () => {
        if (view === 'Settings') {
            setView('You') 
            setBack(null)
        }
        else if (['Settings','Change Name','Change Password', 'Change Email', 'Delete Activity', 'Delete User'].includes(view)){
            setView('Settings'); setBack('You')
        }
    }

    const handleChangeNamePressed = () => {
        navigation.navigate("Login")
        console.log('navv')
    }
    const handleChangeEmailPressed = () => {
        navigation.navigate("Login")
    }
    const handleChangePasswordPressed = () => {
        navigation.navigate("Login")
    }
    const handleDeleteActivityPressed = () => {
        navigation.navigate("Login")
    }
    const handleLogoutPressed = () => {
        navigation.navigate("Login")
    }
    const handleDeleteUserPressed = () => {
        navigation.navigate("Login")
    }

    return (

        <SafeAreaView style={ styles.base }>
            
            <Header navigation={navigation}/>

            <Home/>      

            <Footer navigation={navigation}/>

        </SafeAreaView>
    )
}

export default Dashboard


const styles = StyleSheet.create({
    base: {
        flex: 1,
        fontFamily: theme.font.open,
    },  

    header : {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: theme.colors.border,
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonBack: {
        flexDirection: 'row',
        marginTop: 1,
    },
    textBack: {
        marginTop: 2.5,
        color: theme.colors.main,
        fontSize: 19,
        fontWeight: 400,
        fontFamily: theme.font.open
    },
    headerText: {
        fontSize: 20,
        fontWeight: 500,
        fontFamily: theme.font.open
    },
    buttonSetting: {
        marginRight: 14,
    },
    

    body: {
        flex: 1,
    },  
    scrollViewStyle: {
        minHeight: Dimensions.get('window').height-55-55-Constants.statusBarHeight,
        backgroundColor: theme.colors.backList,
    },


    footer: {
        height: 55,
        borderTopWidth: 1,
        borderColor: theme.colors.border,
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems:'flex-end',
        
    },
    footerButton: {
        color: theme.colors.main,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 1,
    },
    footerText: {
        color: theme.colors.almostBlack,
        marginTop: 2,
        fontSize: 13,
    },


    
    input: {
        fontSize: 14,
        fontWeight: 400,
        textAlign: 'center',
        height: 38,
        width: 345,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        padding: 10,
    },
    buttonLogin: {
        height: 38,
        width: 345,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.main,
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 500,
        textAlign: 'center',
        color: theme.colors.almostWhite,
        fontFamily: theme.font.open   
    },
    

})