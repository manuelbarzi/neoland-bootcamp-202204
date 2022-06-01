
// min 12:56 dia 18/05 explicacion de funcionamiento del contador de archivos leidos
// 13:05 explicacion general de toda la funcion

const { validateStringNotEmptyOrBlank, validateUsername, validatePassword, validateFunction } = require('../validators')
const { readdir, readFile, writeFile } = require('fs')
const { ConflictError } = require('../errors')
const { User } = require('../models')
const { createId } = require('../utils')


function createUser(name, username, password, callback) {
    //validateStringNotEmptyOrBlank(name, 'name')
    //validateUsername(username)
    //validatePassword(password)
    validateFunction(callback, 'callback')

    // miro el directorio y me traigo todos los archivos json
    readdir('./db/users', (error, files) => {  // la carpeta se busca desde el principal, donde estoy trabajando (notes), se lo indico en el package.json
        
        if (error) return callback(error)   // si me devuelve error al acceder a los archivos

        // como se lanzan procesos que no se cuando van a terminar
        // y me van llegando respuestas de forma aleatoria, que voy atendiendo segun su orden de llegada
        // no puedo saber cual es el ultimo ni cuando lo hare
        // ¿como se cuando ha terminado y ha llegado al final?  necesito alguna forma de contar
        let count = 0, _error  // error enpieza con undefined

        
        if(files.length) { // si hay archivs
            
            files.forEach(file => { // para cada uno de los archivos
                readFile(`./db/users/${file}`, 'utf8', (error, json) => {  // ejecuto lecturas asicronas, cada uno lee a su bola y cuando a terminado se pone en cola
                                                                           // tal cual llegan voy mirando que tengo en la cola
                    
                    if(!_error) { // mientras no esta definido error voy haciendo cosas
                        
                        // miro si ha llegado algun error de la lectura de archivos, si lo hay habre inicializado la variable _error y ya no continuo nunca mas
                        if (error) return callback(_error = error)  // aqui paralizo la funcion con el callback, pasandole el error que tenga
                        
                        count ++  // cuento lectura de fichero, para que alguien me diga que hemos terminado
                        
                        const user = JSON.parse(json) // paso el fichero a formato JS
                    
                        if(user.username === username)  // miro si alguno ya tiene el nombre de usuario que voy a crear
                            return callback(_error = new ConflictError(`username ${username} already exists`)) // si lo tiene paso por callback un nuevo error
                                                            // a la vez que inivio mi nuevo error para decirle que deje de atender respuestas

                        // cuando haya leido TODOS los ficheros, entro
                        if (count === files.length) { // cuando el count sea === al files.length, se que he leido todos los ficheros
                            const user = new User(name, username, password) // creo usuario nuevo
                            const json = JSON.stringify(user, null ,4) // lo paso a json
                            const userId = createId() // genero un id

                            writeFile(`./db/users/${userId}.json`, json, error => { // escribo el nuevo archivo de mi usuario
                                if (error) return callback(error)  // si me encuentro un error escribiendo se lo paso por callback

                                callback(null, userId) // sino, confirmo todo ok con callback null y paso tambien el ID que he creado del nuevo usuario
                            })
                        }
                    }
                })
            })
        } else {
            const user = new User(name, username, password) // creo usuario nuevo
            const json = JSON.stringify(user, null ,4) // lo paso a json
            const userId = createId() // genero un id

            writeFile(`./db/users/${userId}.json`, json, error => { // escribo el nuevo archivo de mi usuario
                if (error) return callback(error)  // si me encuentro un error escribiendo se lo paso por callback

                callback(null, userId) // sino, confirmo todo ok con callback null y paso tambien el ID que he creado del nuevo usuario
            })
        }
    })
}

module.exports = createUser