import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import IconFeather from 'react-native-vector-icons/Feather'
import theme from './theme.js'

import FormikInputValue from '../vendor/FormikInput.js'
import { Formik } from 'formik'
import { formularValidationSchema } from '../validators/formular.js'
import registerUser from '../logic/registerUser.js'
import authenticateUser from '../logic/authenticateUser.js'


const Register = ( {navigation} ) => {

    const initialValues = {
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const handleFormSubmit = async (values) => {
        const {name, username, email, password, confirmPassword} = values

        if (password !== confirmPassword) {
            /* handleFeedback({ type: 'error', message: 'Password does not match'}) */
            console.log('constraseña diferente')
            return 
        }

        try {
            await registerUser(name, username, password, email)

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
                <Text style={ styles.headerText }>Register</Text>
                <View style={ styles.rightContainer }>
                </View>
            </View>



            <Formik validationSchema={formularValidationSchema} initialValues={initialValues} 
                onSubmit= { values => handleFormSubmit(values) }>
                    {( { handleSubmit } ) => {
                        return (
                        <View style={ styles.body }>
                            <FormikInputValue
                                name='name'
                                placeholder="Name"/>
                            <FormikInputValue
                                name='username'
                                placeholder="Username"/>
                            <FormikInputValue
                                name='email'
                                placeholder="Email"/>
                            <FormikInputValue
                                name='password'
                                placeholder="Password"
                                secureTextEntry={true}/>
                            <FormikInputValue
                                name='confirmPassword'
                                placeholder="Confirm password"
                                secureTextEntry={true}/>
                            <TouchableWithoutFeedback onPress={handleSubmit}>
                                <View style={ styles.buttonLogin}>
                                    <Text style={ styles.buttonText }>Regiter</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        )
                    }}
            </Formik>
        </View>
    )
}

export default Register


const styles = StyleSheet.create({
    base: {
        fontFamily: "Open sans"
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
        
    }

})