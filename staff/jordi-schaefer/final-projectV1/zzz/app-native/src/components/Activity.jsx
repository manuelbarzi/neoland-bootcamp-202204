import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Constants from 'expo-constants'
import IconIoni from 'react-native-vector-icons/Ionicons'
import IconAwe from 'react-native-vector-icons/FontAwesome5'
import theme from './theme.js'
//import MapView from "react-native-maps";



const Activity = ( {navigation} ) => {

    const [view, setView] = useState("Start")
    const [sport, setSport] = useState("Cycling")

    const handleCyclingPress = () => {setSport("Cycling"); }
    const handleHikingPress = () => {setSport("Hiking"); }
    const handleSnowPress = () => {setSport("Snowshoeing"); }
    const handleSkiingPress = () => {setSport("Skiing"); }

    const handleStartPress = () => {
        
    }

    const handlePressBack = () => {
        if (view === "Start") {
            navigation.navigate('Home')
        }
    }


    return (
        <View style={ styles.base }>

            <View style={ styles.header }>
                <View style={ styles.leftContainer }>
                    {view==='Start' &&
                    <TouchableWithoutFeedback style={ styles.buttonBack } onPress={() => handlePressBack() }>
                       <Text style={ styles.textBack }>Close</Text>
                    </TouchableWithoutFeedback> }
                </View>
                <Text style={ styles.headerText }>{sport}</Text>
                <View style={ styles.rightContainer }>
                </View>
            </View>
            

            <View style = {styles.body}>
                <View style={styles.page}>
               {/*  <MapView style={{height: 300, width:300}}
                    initialRegion={{
                    latitude: 37.7882,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }} /> */}
                </View>                  
            </View>



            <View style={ styles.footer }>  
                <View style={ styles.footerContainerButton }>
                    <TouchableWithoutFeedback style={ styles.footerButton } onPress={ handleCyclingPress }>
                        <IconIoni name="bicycle" size={32} color={(sport==="Cycling")? theme.colors.main: theme.colors.almostBlack} style={{marginBottom: -6}}/>
                    </TouchableWithoutFeedback> 

                    <TouchableWithoutFeedback style={ styles.footerButton } onPress={ handleHikingPress }>
                        <IconAwe name="hiking" size={25} color={(sport==="Hiking")? theme.colors.main: theme.colors.almostBlack} style={{marginRight: 10}}/>
                    </TouchableWithoutFeedback> 

                    <TouchableWithoutFeedback style={ styles.footerButton } onPress={ handleSnowPress }>
                        <IconAwe name="skating" size={25} color={(sport==="Snowshoeing")? theme.colors.main: theme.colors.almostBlack} />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback style={ styles.footerButton } onPress={ handleSkiingPress }>
                        <IconAwe name="skiing" size={25} color={(sport==="Skiing")? theme.colors.main: theme.colors.almostBlack} />
                    </TouchableWithoutFeedback>
                </View>      
                <TouchableWithoutFeedback style={ styles.footerStartButton } onPress={ handleStartPress }>
                    <Text style={ styles.footerStartText }>START</Text>
                </TouchableWithoutFeedback> 
            </View>

        </View>
    )
}

export default Activity


const styles = StyleSheet.create({

    base: {
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
    textBack: {
        marginLeft: 10,
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
    

    body: {
        flex: 1,
        minHeight: Dimensions.get('window').height-55-125-Constants.statusBarHeight,
    },  


    footer: {
        height: 140,
        borderTopWidth: 1,
        borderColor: theme.colors.border,      
    },
    footerContainerButton: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems:'flex-end',
        marginTop: 6,
    },
    footerButton: {
        color: theme.colors.main,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    footerStartButton: {
        backgroundColor: theme.colors.main,
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    footerStartText:{
        fontSize: 17,
        fontWeight: 500,
        color: theme.colors.almostWhite,
        alignSelf: 'center',
    },

})