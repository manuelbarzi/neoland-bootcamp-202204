/*
para crea la función devo tener en conta:
nome, username, password, callbaack
createUser("Jhon Doe", "johndoe", "1234",(error, userId) =>{
})
 */

//const { json, json } = require('stream/consumers')
const { validateStringNotEmptyOrBlank, validateUsername, validatePassword, validateFunction } = require('../validators')
const { readdir, readFile, writeFile } = require('fs')
const { ConflictError } = require('../errors')
const { User } = require('../models')//
const { createId } = require('../utils')

//trago las funciones de validaciones para validar los parametros de la función CreateUser.
function createUser(name, username, password, callback) {
    validateStringNotEmptyOrBlank(name, 'name')
    validateUsername(username)
    validatePassword(password)
    validateFunction(callback, 'callback')

    //uso un readdir para leer de los archivos que hay en la capeta db.
    readdir('./db/users', (error, files) => {
        if (error) return callback(error)
        //como no sabemos cuanto tardrá el proceso de lectura de reddir, criamos un contador que nos conta cuanta vezes ha terminado leer fichero. 
        let count = 0, _error

        if (files.length) {
            //uso un forEach metodo para ejecuta la función indicada una vez por cada elemento del array.
            files.forEach(file => {
                readFile(`./db/users/${file}`, 'utf8', (error, json) => {
                    //si no ha tenido error, que haga el countador (lectura de fichero)
                    if (!_error) {
                        if (error) return callback(_error = error)//si ha tenido error el na lectura, llamo la callback que iniciará na variable count y parar el contage.

                        count++ //contador
                          
                        const user = JSON.parse(json)//si no ha tenido error,leeo el json, o tranformo en obj
                        //cuando el count sea igual que el file length saberemos que ha terminado de ler los ficheros.
                        if (user.username === username)
                            return callback(_error = new ConflictError(`username ${username} already exists`))//si sale error de conflicto apunta que el usuario ya existe y para la ejecución.

                        //si count.length es igual a file.length, llego al final del array del archivo
                        if (count === files.length) {
                            const user = new User(name, username, password)//si todo ha ido bien creo un nuevo usuario

                            const json = JSON.stringify(user, null, 4)//lo transformo en stringify de json

                            const userId = createId()//le creo un ID

                            writeFile(`./db/users/${userId}.json`, json, error => {//le guardo em disco con writeFile
                                if (error) return callback(error)

                                callback(null, userId)
                            })
                        }
                    }
                })
            })
        } else {
            const user = new User(name, username, password)//si todo ha ido bien creo un nuevo usuario

            const json = JSON.stringify(user, null, 4)//lo transformo en stringify de json

            const userId = createId()//le creo un ID

            writeFile(`./db/users/${userId}.json`, json, error => {//le guardo em disco con writeFile
                if (error) return callback(error)

                callback(null, userId)
            })
        }
    })
}

module.exports = createUser