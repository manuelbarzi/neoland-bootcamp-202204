import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Constants from 'expo-constants'
import theme from '../theme.js'


const Settings = ( props ) => {
    
    

    return (
        <View style={ styles.bodySettings }>
            

            <View style={styles.space}></View>

            <TouchableWithoutFeedback onPress={() => props.onChangeNamePressed()} style={ styles.box }>
                <Text style={ styles.buttonSetting }>Change name</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => props.onChangePasswordPressed()} style={ styles.box }>
                <Text style={ styles.buttonSetting }>Change password</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => props.onChangeEmailPressed()} style={ styles.box2 }>
                <Text style={ styles.buttonSetting }>Change email</Text>
            </TouchableWithoutFeedback>

            <View style={styles.space}></View>

            <TouchableWithoutFeedback onPress={() => props.onDeleteActivityPressed()} style={ styles.box2 }>
                <Text style={ styles.buttonSetting }>Delete activity</Text>
            </TouchableWithoutFeedback>

            <View style={styles.space}></View>

            <TouchableWithoutFeedback onPress={() => props.onLogoutPressed()} style={ styles.box }>
                <Text style={ styles.buttonSetting }>Logout</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => props.onDeleteUserPressed()} style={ styles.box2 }>
                <Text style={ styles.buttonSettingDel }>Delete User</Text>
            </TouchableWithoutFeedback>

        </View>
    )
}

export default Settings


const styles = StyleSheet.create({
    bodySettings: {
        fontFamily: theme.font.open,
        alignItems: 'center',
        backgroundColor: theme.colors.backList,
        minHeight: Dimensions.get('window').height-55-55-Constants.statusBarHeight,
    },  

    space: {
        height: 38,
    },

    box: {
        justifyContent: 'center',
        height: 38,
        width: Dimensions.get('window').width,
        borderTopWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: 'white',
        paddingLeft: 15,
    },
    box2: {
        justifyContent: 'center',
        height: 38,
        width: Dimensions.get('window').width,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: 'white',
        paddingLeft: 15,
    },

    buttonSetting: {
        fontSize: 15,
        fontWeight: 400,
        color: theme.colors.almostBlack,
    },

    buttonSetting2: {
        fontSize: 15,
        fontWeight: 400,
        height: 38,
        width: Dimensions.get('window').width,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: 'white',
        padding: 10,
    },
    buttonSettingDel: {
        fontSize: 15,
        fontWeight: 500,
        color: 'red',
    },
    

})


/*  leer data

const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  } */