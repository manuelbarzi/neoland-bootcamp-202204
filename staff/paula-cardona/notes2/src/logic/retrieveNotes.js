const { validateStringNotEmptyNoSpaces, validateFunction } = require('../validators')
const { access, readdir, readFile } = require('fs')
const { NotFoundError } = require('../errors')

function retrieveNotes(userId, callback) {
    //según el userId hace toda la lógica necesaria para conectar con la base de datos y devuelve por callback la respuesta de la base de datos que puede ser error o las notas
    validateStringNotEmptyNoSpaces(userId)
    validateFunction(callback, 'callback')

    //asicrono
    access(`./db/users/${userId}.json`, error => {
        if (error) return callback(new NotFoundError(`user with id ${userId} not found`))

        readdir('./db/notes', (error, files) => {
            if (error) return callback(error)

            const notes = []

            if (!files.length) //files es un objeto array de string que guarda los nombres de los archivos de ese directorio
                callback(null, notes) //no existe entonces notes =[]
            else {
                let count = 0, _error

                files.forEach(file => {
                    readFile(`./db/notes/${file}`, 'utf8', (error, json) => {
                        if (!_error) {
                            if (error) return callback(_error = error)

                            count++

                            const note = JSON.parse(json)

                            note.date = new Date(note.date)

                            if (note.user === userId)
                                notes.push(note)

                            if (count === files.length)
                                callback(null, notes)
                        }
                    })
                })
            }

        })
    })
}

module.exports = retrieveNotes