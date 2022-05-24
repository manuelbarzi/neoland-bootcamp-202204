const { validateFunction, validateStringNotEmptyNoSpaces, validateString } = require('../validators')
const { access, writeFile, readFile } = require('fs')
const { Note } = require('../models')
const { createId } = require('../utils')
const { NotFoundError } = require('../errors')


function saveNote(userId, noteId, text, callback) {
    validateStringNotEmptyNoSpaces(userId, 'userId')
    if(noteId != null) validateStringNotEmptyNoSpaces(noteId, 'noteId')
    if(text != null) validateString(text, 'text')  // si no escribo nada me puede llegar un null, solo valido estring si no es null
    validateFunction(callback, 'callback')


    access(`./db/users/${userId}.json`, (error) => { 
        if (error) return callback(new NotFoundError(`User with id ${userId} not found`))

        if(noteId) {
            readFile(`./db/notes/${noteId}.json`, (error, json) => { // escribo el nuevo archivo de mi usuario
                if (error) return callback(new NotFoundError(`Note with id ${noteId} not found`))

                const note = JSON.parse(json)
                debugger
                note.text = text
                const newJson = JSON.stringify(note, null, 4)

                writeFile(`./db/notes/${noteId}.json`, newJson, error => { // escribo el nuevo archivo de mi usuario
                    if (error) return callback(error)  // si me encuentro un error escribiendo se lo paso por callback
                    
                    return callback(null, noteId) // sino, confirmo todo ok con callback null y paso tambien el ID que he creado de la nueva nota
                })
            })

        } else {
            const id = createId() // genero un nuevo ID
            const note = new Note(id, userId, text) // creo objeto nota nuevo
            const json = JSON.stringify(note, null, 4)

            writeFile(`./db/notes/${id}.json`, json, error => { // escribo el nuevo archivo de mi usuario
                if (error) return callback(error)  // si me encuentro un error escribiendo se lo paso por callback
                
                return callback(null, id) // sino, confirmo todo ok con callback null y paso tambien el ID que he creado de la nueva nota
            })

        }
    })
     

}


module.exports = saveNote