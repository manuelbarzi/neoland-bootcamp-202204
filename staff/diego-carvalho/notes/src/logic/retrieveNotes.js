//importaciones 
const { validateStringNotEmptyNoSpaces, validateFunction } = require('../validators')
const { access, readdir, readFile } = require('fs')
const { NotFoundError } = require('../errors')

//esta función según el userId hace toda la lógica necesaria para conectar con la BD y delvolve por callback la respuesta de la BD que puede ser error o las notas.
function retrieveNotes(userId, callback) {
    //validaciones
    validateStringNotEmptyNoSpaces(userId)
    validateFunction(callback, 'callback')
    //el metodo access p/ aceder a la DB, y le paso la url (ruta) de la BD y el userId en formato json y el error
    access(`./db/users/${userId}.json`, error => {
        if (error) return callback(new NotFoundError(`user with id ${userId} not found`))
     //aqui llamo el metodo readdir y le paso como parametro la ruta de la BD y una callbacl con error y las files.
        readdir('./db/notes', (error, files) => {
            if (error) return callback(error)//si hay error la callback me devolve erro y para la ejecución y si no hay...

            const notes = []// creo un array vacio de la cual pondré las notes recuperadas

            if (!files.length)//si files.length (files = array de strings) esta vacio la callback null es llamada.
                callback(null, notes)// si hay strings en el array de files,devolvemos notes que é un array vacio.
            else {
                let count = 0, _error//declaro un variable count (contador) y un error que de momento es undefined.

                files.forEach(file => {//uso el metodo forEach que pasará por cada una de las files... 
                    readFile(`./db/notes/${file}`, 'utf8', (error, json) => {//y el metodo readFile que has leerá. Para eso, le paso como parametro la ruta (db/notes/file), el formato de lectura de caracteres (utf8)y una callback de error.
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