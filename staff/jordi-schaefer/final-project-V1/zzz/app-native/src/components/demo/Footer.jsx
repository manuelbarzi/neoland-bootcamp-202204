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
//  inonicons
// thumbs-up-sharp
// import {'dotenv'} from 'config'


const Footer = ( {navigation} ) => {

    const [view, setView] = useState("Home")


    const handleHomePress = () => {
        setView("Home")
    }
    const handleRegisterPress = () => {
        navigation.navigate('Activity')
    }
    const handleYouPress = () => {
        setView("You")
    }


    return (

        <View style={ styles.footer }>        
            <TouchableWithoutFeedback style={ styles.footerButton } onPress={ handleHomePress }>
                <IconFeather name="home" size={27} color={(view==='Home')? theme.colors.main: theme.colors.almostBlack}/>
                <Text style={[styles.footerText, {color: (view==='Home')? theme.colors.main: theme.colors.almostBlack}]}>Home</Text>
            </TouchableWithoutFeedback> 

            <TouchableWithoutFeedback style={ styles.footerButton } onPress={ handleRegisterPress }>
                <Icon name="radio-btn-active" size={27} color={theme.colors.almostBlack}/>
                <Text style={styles.footerText}>Register</Text>
            </TouchableWithoutFeedback> 

            <TouchableWithoutFeedback style={ styles.footerButton } onPress={ handleYouPress }>
                <IconIoni name="ios-person-sharp" size={27} color={(view!='Home')? theme.colors.main: theme.colors.almostBlack} style={{marginBottom: -3}} />
                <Text style={[styles.footerText, {color: (view!='Home')? theme.colors.main: theme.colors.almostBlack}]}>You </Text>
            </TouchableWithoutFeedback>
        </View>         

    )
}

export default Footer


const styles = StyleSheet.create({

    footer: {
        height: 55,
        borderTopWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: 'white',
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems:'flex-end',
        width: Dimensions.get('window').width,
        position: 'fixed',
        bottom: 0,
        zIndex: 5,
        
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