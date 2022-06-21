import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants from 'expo-constants'
import IconFeather from 'react-native-vector-icons/Feather'
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIoni from 'react-native-vector-icons/Ionicons'
import IconAwe from 'react-native-vector-icons/FontAwesome5'
import theme from './theme.js'
import Moment from 'moment';

import MapboxGL from '@rnmapbox/maps';
MapboxGL.setAccessToken('pk.eyJ1IjoianNjaGFlZmVyMjEiLCJhIjoiY2w0OHo3M2ExMHg5NzNrbXMyeHRqdnhvdiJ9.bDaOrWFw4ZzBvaba3C5WIQ');


const ActivityBox = (props) => {

    const { activity, setDelete, onRemove } = props


    const handleRemoveClick = () => {
        const activityId= activity.id

        if (activityId) {
            try {
                deleteActivity(sessionStorage.token, activityId, error => {
                    if (error) {
                        if(error.message === `Activitie with id "${activityId}" does not exist`)
                            onRemove(activityId)
                        else handleFeedback({ type: 'error', message: error.message})
                        return
                    }
                    onRemove(activityId)
                    handleFeedback({ type: 'success', message: 'Sticker deleted'})
                })
            } catch(error) {
                handleFeedback({ type: 'error', message: error.message})
            }
        }
    }

    const handleDelete = () => {

    }


    return (
        <View style={ styles.containerBox }>


            <View style={ styles.boxHeader }>
                <View style={{flexDirection: 'column'}}>
                    <Text style={ styles.nameText }>{props.activity.user.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                        {props.activity.sport === "Cycling" && <IconIoni name="bicycle" size={18} color={theme.colors.almostBlack} style={{marginTop: -2}}/> }
                        {props.activity.sport === "Hiking" && <IconAwe name="hiking" size={14} color={theme.colors.almostBlack} /> }
                        {props.activity.sport === "SnowShoeing" && <IconAwe name="skating" size={14} color={theme.colors.almostBlack} /> }
                        {props.activity.sport === "Skiing" && <IconAwe name="skiing" size={14} color={theme.colors.almostBlack} /> }
                        <Text>   </Text>                      
                        <Text style={ styles.dateText }>{Moment(props.activity.date).format('DD/MMM/YYYY')} at {Moment(props.activity.date).format('HH:MM')}</Text>
                    </View>
                    <Text style={ styles.titleText }>{props.activity.title}</Text>

                    <View style={ styles.dataHeader}>
                        <View style={ styles.dataBox}>   
                            <Text style={ styles.dateText }>Distance</Text>
                            <Text style={ styles.numberText }>Distance</Text>
                        </View>
                        <View style={ styles.dataBox}>   
                            <Text style={ styles.dateText }>Altitude</Text>
                            <Text style={ styles.numberText }>Distance</Text>
                        </View>
                        <View style={ styles.dataBox}>   
                            <Text style={ styles.dateText }>Time</Text>
                            <Text style={ styles.numberText }>Distance</Text>
                        </View>
                    </View>
                </View>
            </View>


            { setDelete && <View style={ styles.deleteButton }> 
                <TouchableWithoutFeedback onPress={handleDelete}>
                    <View style={ styles.buttonDelete}>
                        <Text style={ styles.buttonText }>Delete</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View> }

            { !setDelete && <View style={ styles.boxMap }>
                    <View style={styles.container}>
                        <MapboxGL.MapView style={styles.map} />
                    </View>
            </View> }

            { !setDelete && <View style={ styles.boxFooter }>
                    <TouchableWithoutFeedback style={ styles.buttonSetting } onPress={() => handlePressSettings() }>
                        <IconFeather name="thumbs-up" size={26} color={theme.colors.main}/>
                    </TouchableWithoutFeedback> 
                    <TouchableWithoutFeedback style={ styles.buttonSetting } onPress={() => handlePressSettings() }>
                        <IconMat name="comment-text-outline" size={26} color={theme.colors.main}/>
                    </TouchableWithoutFeedback> 
            </View> }
   
        </View>
    )
}

export default ActivityBox


const styles = StyleSheet.create({
    containerBox: {
        fontFamily: theme.font.open,
        alignItems: 'center',
        backgroundColor: theme.colors.backList,
        width: Dimensions.get('window').width,
    },  

    boxHeader: {
        height: 140,
        backgroundColor: theme.colors.almostWhite,
        width: Dimensions.get('window').width,
        padding: 15,
    },
    nameText: {
        fontSize: 14,
        fontWeight: 700,
        color: theme.colors.almostBlack,        
    },
    dateText: {
        fontSize: 12,
        fontWeight: 400,
        color: theme.colors.almostBlack,

    },
    titleText: {
        fontSize: 18,
        fontWeight: 700,
        color: theme.colors.almostBlack,
    },
    dataHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        marginRight: 40,

    },
    numberText: {
        fontSize: 20,
        fontWeight: 400,
    },


    boxMap: {
        justifyContent: 'center',
        height: 230,
        width: Dimensions.get('window').width,
        borderColor: theme.colors.border,
        backgroundColor: 'white',
    },



    boxFooter: {
        height: 45,
        backgroundColor: theme.colors.almostWhite,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
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


    buttonDelete: {
        height: 38,
        width: 345,   
        justifyContent: 'center',
        backgroundColor: '#d32f2f',
        borderRadius: 3,
        marginTop: 8,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 500,
        textAlign: 'center',
        color: '#3f3f3f',
        fontFamily: theme.font.open      
    }
    

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