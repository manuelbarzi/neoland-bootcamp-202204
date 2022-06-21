import React from 'react'
import {Text, StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    buttonMain: {
        height: 38,
        width: 345,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0745a1',
        borderRadius: 3,
    },
    input: {
        fontSize: 14,
        fontWeight: 400,
        textAlign: 'center',
        height: 38,
        width: 345,
        borderTopWidth: 1,
        borderTopColor: 'grey',
        padding: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 400,
        textAlign: 'center',
        color: 'white',
        padding: 10,
    }
})



export default function StyledButton ({buttonMain, input, text}) {
    const buttonStyles = [
        styles.buttonMain,
        styles.input,
        styles.text
    ]

    return (
        <View style={buttonStyles}>
            {children}    
        </View>
    )
}