const { validateStringNotEmptyOrBlank, validateUsername, validatePassword, validateFunction } = require('../validators')
const { readdir, readFile, writeFile } = require('fs')
const { ConflictError } = require('../errors')
const { User } = require('../models')
const { createId } = require('../utils')

function createUser(name, username, password, callback) { //la callback se lanza cuando termina de leer
    validateStringNotEmptyOrBlank(name, 'name')
    validateUsername(username)
    validatePassword(password)
    validateFunction(callback, 'callback')

    readdir('./db/users', (error, files) => {//files:array de strings con nombre de los ficheros
        //sincronia porque estaba en asincronia leyendo todos los archivos, se dispara callback(error,files) cuando termina de leer
        if (error) return callback(error)

        // como se lanzan procesos que no se cuando van a terminar
        // y me van llegando respuestas de forma aleatoria, que voy atendiendo segun su orden de llegada
        // no puedo saber cual es el ultimo ni cuando lo hare
        // ¿como se cuando ha terminado y ha llegado al final?  necesito alguna forma de contar

        let count = 0, _error// error enpieza con undefined

        if (files.length)// si hay archivs
            files.forEach(file => {
                //asincronia
                readFile(`./db/users/${file}`, 'utf8', (error, json) => { // ejecuto lecturas asicronas, cada uno lee a su bola y cuando a terminado se pone en cola
                                                                            // tal cual llegan voy mirando que tengo en la cola
                    if (!_error) { // mientras no esta definido error voy haciendo cosas
                        // miro si ha llegado algun error de la lectura de archivos, si lo hay habre inicializado la variable _error y ya no continuo nunca mas
                        if (error) return callback(_error = error) // aqui paralizo la funcion con el callback, pasandole el error que tenga
                        
                        count++ // cuento lectura de fichero, para que alguien me diga que hemos terminado

                        const user = JSON.parse(json) // paso el fichero a JS

                        if (user.username === username) // miro si alguno ya tiene el nombre de usuario que voy a crear
                            return callback(_error = new ConflictError(`username ${username} already exists`)) // si lo tiene paso por callback un nuevo error
                                                                                                                    // a la vez que inivio mi nuevo error para decirle que deje de atender respuestas
                        // cuando haya leido TODOS los ficheros, entro
                        if (count === files.length) { // cuando el count sea === al files.length, se que he leido todos los ficheros
                            const user = new User(name, username, password) //creo nuevo usuario

                            const json = JSON.stringify(user, null, 4) //lo paso a JSON

                            const userId = createId() //GeneroID

                            writeFile(`./db/users/${userId}.json`, json, error => {
                                if (error) return callback(error)

                                callback(null, userId) // sino, confirmo todo ok con callback null y paso tambien el ID que he creado del nuevo usuario
                            })
                        }
                    }
                })
            })
        else {
            const user = new User(name, username, password)

            const json = JSON.stringify(user, null, 4)

            const userId = createId()

            writeFile(`./db/users/${userId}.json`, json, error => {
                if (error) return callback(error)

                callback(null, userId)
            })
        }
    })
}

module.exports = createUser