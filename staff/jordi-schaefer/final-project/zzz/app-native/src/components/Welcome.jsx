import React from 'react'
import { StyleSheet, Text, ImageBackground, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import theme from './theme.js'

const Welcome = ( {navigation} ) => {

    return (
            <ImageBackground style={ styles.image } source={ require('../../public/peak.jpg') } >
                <View style= { styles.container }>
                    <Text style={ styles.boxText }>Do you already have an account?</Text>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                        <View style={ styles.buttonLogin }>
                            <Text style={ styles.buttonText }>Login</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={ styles.boxText }>First time here?</Text>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
                        <View style={ styles.buttonRegister}>
                            <Text style={ styles.buttonTextR }>Register</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ImageBackground>
    )
}

export default Welcome


const styles = StyleSheet.create({
    image: {
        height: '100vh',
        justifyContent: 'flex-end',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        gap: 4,
        padding: 25,
        alignItems: 'center',
        maxHeight: 200,
        backgroundColor: theme.colors.backBox,
    },

    boxText: {
        fontSize: 16,
        fontWeight: 400,
        textAlign: 'center',
        color: theme.colors.almostWhite,
        padding: 10,
        fontFamily: theme.font.open,
    
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
    buttonRegister: {
        height: 38,
        width: 345,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.almostWhite,
        borderRadius: 5,
        color: theme.colors.almostBlack, 
    },
    buttonText: {
        fontFamily: theme.font.open,
        fontSize: 18,
        fontWeight: 500,
        textAlign: 'center',
        color: theme.colors.almostWhite,     
    },
    buttonTextR: {
        fontFamily: theme.font.open,
        fontSize: 18,
        fontWeight: 500,
        textAlign: 'center',
        color: theme.colors.almostBlack, 
    }

})