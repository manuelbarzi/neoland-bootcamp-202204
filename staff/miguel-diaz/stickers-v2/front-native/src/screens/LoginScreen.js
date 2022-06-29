import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import Context from '../components/Context'
import Logger from '../vendor/Loggy'
import authenticateuser from '../logic/authenticateUser'
import { isJwtValid } from '../validators'

const backImage = require('../../assets/position4.png')

export default function LoginScreen({navigation}){

    const logger = new Logger('Login')

    logger.info('call')

    const {handleFeedback} = useContext(Context)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onHandleLogin = () => {
        if(email !== "" && password !== "") {
            authenticateuser(username, password)
            .then(() => console.log("Usuario Logeado"))
            .catch((err) => Alert.alert("Ingresa un usuario real porfi :( ", err.message))
        }

        try {
            const token = await authenticateuser(username, password)
            sessionStorage.token = token
            props.onuserLoggedIn()
        }catch (error) {
            handleFeedback({level: 'error', message: error.message})
        }
    }

    return(
        isJwtValid(sessionStorage.token) ? 
        <></> :
        <View style={styles.container}>
            <Image source={backImage} style={styles.backImage} />
            <View style={styles.whiteSheet} />
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Ingresa tu email"
                    autoCapitalize='none'
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Ingresa tu contraseña"
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
                    <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Entrar</Text>
                </TouchableOpacity>
                <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                    <Text style={{color: 'white', fontWeight: '600', fontSize: 14}}>¿Aún no tienes una cuenta 😯?  </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{color: 'white', fontWeight: '600', fontSize: 14}}>Registrarme</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#white',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        paddingBottom: 24,
        marginTop: 180
    },
    titleLogin:{
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        paddingBottom: 24,
        marginTop: 50,
        borderRadius: 15,
    },
    input: {
        backgroundColor: '#F6F7FB',
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
    },
    backImage: {
        width: '100%',
        height: 340,
        position: 'absolute',
        top: 0,
        resizeMode: 'cover'
    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#2e4399',
        borderTopLeftRadius: 60,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    button: {
        backgroundColor: '#4d70ff',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    }
})