import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import IconFeather from 'react-native-vector-icons/Feather'
import theme from '../theme.js'

import updateUserName from '../../logic/updateUserName'

import FormikInputValue from '../../vendor/FormikInput.js'
import { Formik } from 'formik'
import { formularValidationSchema } from '../../validators/formular.js'

import authenticateUser from '../../logic/authenticateUser'

const ChangeName = () => {
    
    const initialValues = {
        name: '',
        password: ''
    }

    const handleSavePress = async () => {

        try {
            await updateUserName(token, name)
                console.log('hecho!')
                /* handleFeedback({ type: 'success', message: 'Name changed'}) */
                //props.onDataChanged()
    
        } catch(error) {
            console.log(error.message)
            /* handleFeedback({ type: 'error', message: error.message}) */
        } 
    }


    const [name, onChangeName] = useState('');
    const [number, onChangeNumber] = React.useState('');
  
    return (
        <View>

      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder={' New name'}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TouchableWithoutFeedback onPress={handleSavePress()}>
                    <View style={ styles.buttonDelete}>
                        <Text style={ styles.buttonText }>Save</Text>
                    </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
        </View>
    )
}

export default ChangeName


const styles = StyleSheet.create({
    base: {
        fontFamily: theme.font.open
    },  
    container: {

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
    body: {
        flex: 1,
        alignItems: 'center',
        marginTop: 60,
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