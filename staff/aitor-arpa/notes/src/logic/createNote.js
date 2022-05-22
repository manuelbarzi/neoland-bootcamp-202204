const { validateFunction, validateStringNotEmptyNoSpaces, validateString } = require('../validators')
const { readdir, writeFile } = require('fs')
const { Note } = require('../models')
const { createId } = require('../utils')
const { NotFoundError } = require('../errors')


function createNote(userId, text, callback) {
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
                
                if(!_error) { // mientras no esta definido error voy haciendo cosas
                    
                    if (error) return callback(_error = error)
                    
                    const fileId = file.substring(0, file.indexOf('.'))
                    
                    if (fileId === userId) {
                        const id = createId() // genero un nuevo ID
                        const note = new Note(id, userId, text) // creo objeto nota nuevo
                        const json = JSON.stringify(note, null, 4)

                        writeFile(`./db/notes/${id}.json`, json, error => { // escribo el nuevo archivo de mi usuario
                            if (error) return callback(error)  // si me encuentro un error escribiendo se lo paso por callback
                            
                            return callback(null, id) // sino, confirmo todo ok con callback null y paso tambien el ID que he creado de la nueva nota
                        })
                    } else {
                        count++
                        if (count === files.length)
                            return callback(new NotFoundError(`User with id ${userId} not found`))
                    }
                }
            })
        } else {
            return callback(new NotFoundError(`User with id ${userId} not found`))
        }
    })

}


module.exports = createNote


