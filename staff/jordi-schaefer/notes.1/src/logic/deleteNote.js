const { validateStringNotEmptyNoSpaces, validateFunction } = require('../validators')
const { readdir, unlink } = require('fs')
const { NotFoundError } = require('../errors')


// si me pasan un usuario y su contraseña
// quiero devolver toda la info que tenga de el ( si existe)
function deleteNote(userId, noteId, callback) {
    validateStringNotEmptyNoSpaces(userId)
    validateFunction(callback, 'callback')


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
                        unlink(`./db/notes/${noteId}.json`, error => {
                            if(error) return callback(new NotFoundError(`Note with id ${noteId} not found`))
                    
                            return callback(null)
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

module.exports = deleteNote