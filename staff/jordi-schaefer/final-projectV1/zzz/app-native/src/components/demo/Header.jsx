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

//  inonicons
// thumbs-up-sharp
// import {'dotenv'} from 'config'


const Header = ( {navigation} ) => {

    const [view, setView] = useState("Home")
    const [back, setBack] = useState(null)


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


    return (
            <View style={ styles.header }>
                <View style={ styles.leftContainer }>
                    {view==='Settings' &&
                    <TouchableWithoutFeedback style={ styles.buttonBack } onPress={() => handlePressBack() }>
                        <IconFeather name="chevron-left" size={30} color={theme.colors.main}/>
                        <Text style={ styles.textBack }>{back}</Text>
                    </TouchableWithoutFeedback> }
                </View>
                <Text style={ styles.headerText }>{view}</Text>
                <View style={ styles.rightContainer }>
                    {view==='You' &&
                    <TouchableWithoutFeedback style={ styles.buttonSetting } onPress={() => handlePressSettings() }>
                        <IconSimp name="settings" size={26} color={theme.colors.main}/>
                    </TouchableWithoutFeedback> }
                </View>
            </View>
    )
}

export default Header


const styles = StyleSheet.create({

    header : {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: 'white',
        position: 'fixed',
        marginHorizontal: 0,
        width: Dimensions.get('window').width,
        top: 0,
        zIndex: 5,
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
})