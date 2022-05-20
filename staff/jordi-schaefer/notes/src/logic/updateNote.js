const { validateFunction, validateStringNotEmptyNoSpaces, validateString } = require('../validators')
const { readdir, readFile, writeFile } = require('fs')
const { Note } = require('../models')



function createNote(id, userId, text, callback) {
    validateStringNotEmptyNoSpaces(id, 'id')
    validateStringNotEmptyNoSpaces(userId, 'userId')
    validateString(text, 'text')
    validateFunction(callback, 'callback')

    // leer todas las notas que tengo en la carpeta
    // mirar una por una
    // si tiene el mismo id de nombre

    // si tiene el id sobre-escribo la propiedad del texto
    // si no tiene, creo nota nueva


    readdir('./db/users', (error, files) => { 
        if (error) return callback(error)   // si me devuelve error al acceder a los archivos

        let count = 0, _error  // error enpieza con undefined
        debugger
        if(files.length) { // si hay archivos
            files.forEach(file => { // para cada uno de los archivos
                readFile(`./db/users/${file}`, 'utf8', (error, json) => {  // ejecuto lecturas asicronas, cada uno lee a su bola y cuando a terminado se pone en cola
                                                                           // tal cual llegan voy mirando que tengo en la cola
                    if(!_error) { // mientras no esta definido error voy haciendo cosas
                        
                        if (error) return callback(_error = error)

                        
                        const fileId = file.substring(0, file.indexOf('.'))
                        
                        if (fileId === userId) {
                            //guardo la nota, sin comprobar nada mas
                            const note = new Note(id, userId, text) // creo objeto nota nuevo
                            const json = JSON.stringify(note, null, 4)

                            writeFile(`./db/notes/${id}.json`, json, error => { // escribo el nuevo archivo de mi usuario
                                if (error) return callback(error)  // si me encuentro un error escribiendo se lo paso por callback
                                
                                return callback(null) // sino, confirmo todo ok con callback null y paso tambien el ID que he creado del nuevo usuario
                            })
                        } else {
                            count++
                            if (count === files.length)
                                return callback(new Error(`User with id ${userId} not found`))
                        }
                    }
                })
            })
        } else {
            return callback(new Error(`User with id ${userId} not found`))
        }
    })

}


module.exports = createNote