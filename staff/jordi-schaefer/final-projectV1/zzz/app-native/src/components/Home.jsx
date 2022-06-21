import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Fontisto'
import IconFeather from 'react-native-vector-icons/Feather'
import IconIoni from 'react-native-vector-icons/Ionicons'
import IconSimp from 'react-native-vector-icons/SimpleLineIcons'
import theme from './theme.js'
import Settings from './settings/Settings.jsx'
import ActivityList from './ActivityList.jsx'
import ChangeName from './settings/ChangeName.jsx'


const Home = ( {navigation} ) => {

    const [view, setView] = useState("Change Name")
    const [back, setBack] = useState(null)


    const handleBackPress = () => {
        if (view === 'Settings') {
            setView('You') 
            setBack(null)
        }
        else if (['Settings','Change Name','Change Password', 'Change Email', 'Delete Activity', 'Delete User'].includes(view)){
            setView('Settings'); setBack('You')
        }
    }
    
    const handlePressSettings = () => {setView("Settings"); setBack("You")}

    const handleChangeNamePress = () => {setView('Change Name'); setBack('Settings')}
    const handleChangePasswordPress = () => {setView('Change Password'); setBack('Settings')}
    const handleChangeEmailPress = () => {setView('Change Email'); setBack('Settings')}
    const handleDeleteActivityPress = () => {setView('Delete Activity'); setBack('Settings')}
    const handleDeleteUserPress = () => {setView('Delete User'); setBack('Settings')}

    const handleDataChanged = () => handleBackPress()

    const handleLogoutClick = () => {
        props.onUserLoggedOut()
    }

    const handleHomePress = () => { setView("Home") }
    const handleRegisterPress = () => { navigation.navigate('Activity') }
    const handleYouPress = () => { setView("You") }

    return (
        <View style={ styles.base }>

            <View style={ styles.header }>
                <View style={ styles.leftContainer }>
                    {view==='Settings' &&
                    <TouchableWithoutFeedback style={ styles.buttonBack } onPress={() => handleBackPress() }>
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

            

            <ScrollView style = {styles.scrollViewStyle}>
                {view==='Home' && <View>
                    <ActivityList/>
                </View>  } 

                {view==='You' && <View>
                    <ActivityList/>
                </View>  } 

                {view==='Settings' && <Settings onChangeNamePressed={handleChangeNamePress}
                    onChangePasswordPressed={handleChangePasswordPress}
                    onChangeEmailPressed={handleChangeEmailPress}
                    onDeleteActivityPressed={handleDeleteActivityPress}
                    onLogoutPressed={handleLogoutPress}
                    onDeleteUserPressed={handleDeleteUserPress}/>}
                {view === 'Change Name' && <ChangeName onDataChanged={handleDataChanged}/>}
                {view === 'Change Password' && <ChangePassword onDataChanged={handleDataChanged}/>}
                {view === 'Change Email' && <ChangeEmail onDataChanged={handleDataChanged}/>}
                {view === 'Delete User' && <DeleteUser onDeletedUser={props.onDeletedUser}/>} 
                {view === 'Delete Activity' && <DeleteActivity />}
            </ScrollView>



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
            
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    base: {
        fontFamily: theme.font.open,
    },  

    header : {
        zIndex: 1,
        position: 'fixed',
        top: 0,
        height: 55,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: 'white',
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
    


    scrollViewStyle: {
        Height: Dimensions.get('window').height-55-55-Constants.statusBarHeight,
        backgroundColor: theme.colors.backList,
        paddingVertical: 55,
    },


    footer: {
        zIndex: 1,
        position: 'fixed',
        bottom: 0,
        height: 55,
        width: Dimensions.get('window').width,
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems:'flex-end',
        borderTopWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: 'white',
        
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