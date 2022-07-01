import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Fontisto'
import IconFeather from 'react-native-vector-icons/Feather'
import IconIoni from 'react-native-vector-icons/Ionicons'
import IconSimp from 'react-native-vector-icons/SimpleLineIcons'
import theme from '../theme.js'
import Settings from '../settings/Settings.jsx'
import ActivityList from '../ActivityList.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
//  inonicons
// thumbs-up-sharp
// import {'dotenv'} from 'config'


const Home = ( {navigation} ) => {

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
        <View style={ styles.base }>

            <ScrollView style = {styles.scrollViewStyle}>
                {view==='Home' && <View>
                    <ActivityList/>
                </View>  } 

                {view==='Settings' && <Settings handleChangeNamePressed={handleChangeNamePressed}/>}
            </ScrollView>       

        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    base: {
        fontFamily: theme.font.open,
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