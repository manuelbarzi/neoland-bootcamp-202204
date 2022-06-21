import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import IconFeather from 'react-native-vector-icons/Feather'
import theme from './theme.js'

import FormikInputValue from '../vendor/FormikInput.js'
import { Formik } from 'formik'
import { formularValidationSchema } from '../validators/formular.js'

import authenticateUser from '../logic/authenticateUser'

const Login = ( {navigation} ) => {
    
    const initialValues = {
        username: '',
        password: ''
    }

    const handleFormSubmit = async (username, password) => {
        try {
            const token = await authenticateUser(username, password)

            await AsyncStorage.setItem('@storage_Key', token)
            navigation.navigate('Home')

        } catch (error) {
            console.log(error.message)
            //handleFeedback({ level: 'error', message: error.message })
        }
    }


    return (
        <View style={ styles.base }>
            
            <View style={ styles.header }>
            <View style={ styles.leftContainer }>
                <TouchableWithoutFeedback style={ styles.buttonBack } onPress={() => navigation.navigate('Welcome')}>
                    <IconFeather name="chevron-left" size={30} color={theme.colors.main}/>
                    <Text style={ styles.textBack }>Back</Text>
                </TouchableWithoutFeedback>
            </View>
                <Text style={ styles.headerText }>Login</Text>
                <View style={ styles.rightContainer }>
                </View>
            </View>

{/* formulario midudev min 2:35H */}

{/* mensaje de error sala por cada letra que añades
los datos guardados solo pasan si esta bien escrito */}
           
            <Formik validationSchema={formularValidationSchema} initialValues={initialValues} 
                onSubmit= { values => handleFormSubmit(values.username, values.password) }>
                    {( { handleSubmit } ) => {
                        return (
                        <View style={ styles.body }>
                            <FormikInputValue
                                name='username'
                                placeholder="Username"/>
                            <FormikInputValue
                                name='password'
                                placeholder="Password"
                                secureTextEntry={true}/>
                            <TouchableWithoutFeedback onPress={handleSubmit}>
                                <View style={ styles.buttonLogin}>
                                    <Text style={ styles.buttonText }>Login</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        )
                    }}
            </Formik>

        </View>
    )
}

export default Login


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