import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants from 'expo-constants'
import theme from './theme.js'
import ActivityBox from './ActivityBox.jsx'


import retrieveActivities from '../logic/retrieveActivities'


const ActivityList = () => {

    const [activities, setActivities] = useState([])


    useEffect(() => {
        loadActivities()
    },[])


    const loadActivities = async () => {
        try {
            const jsonToken = await AsyncStorage.setItem('@storage_Key')
            //const token = JSON.parse(jsonToken)
            const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjljZGYzOGExN2NlOTUxYjY1N2M0YjQiLCJpYXQiOjE2NTQ4NTIyOTF9.Mcdmc0csq7BoyRpNJDT6dD-i6t1-A7oJtjWh34C0lNc"
            const activities = await retrieveActivities(token)
            
            setActivities(activities)
        } catch(error) {
            //handleFeedback({ type: 'error', message: error.message})
            console.log(error.message)
        }
    }


    return (
        <View style={ styles.bodySettings }>
            
            {activities.map(activiy => <View style={ styles.bodySettings } key={activiy.id} >  
                <ActivityBox activity={activiy} />
            </View>)}
   
        </View>
    )
}

export default ActivityList


const styles = StyleSheet.create({
    bodySettings: {
        fontFamily: theme.font.open,
        alignItems: 'center',
        backgroundColor: theme.colors.backList,
        Height: Dimensions.get('window').height-55-55-Constants.statusBarHeight,
        gap: 15,
        marginVertical: 15,
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