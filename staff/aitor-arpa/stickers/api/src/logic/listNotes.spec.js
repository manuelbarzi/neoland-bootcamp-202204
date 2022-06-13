// TTD Hacemos el spec
// conectamos a la BBDD y hacemos toda la config necesaria
// Borramos todos los documentos de notes (deleteMany)
// Borramos todos los documentos de users (deleteMany)
// Creamos un caso de uso concreto (happy path)
// creamos un usuario y guardamos el id para luego poder usarlo para siguientes pasos
// creamos varias notas para ese usuario (unas 5)
// LLamamos a la función logic correspondiente para comprobar su funcionamiento (happy path)
// Comprobamos si la respuesta es un array, tiene todas las notas introducidas (length) y
// comprobamos que son las notas que he metido en el aterior paso
// Borranmos todos los documentos de notes (deleteMany)
// Borranmos todos los documentos de users (deleteMany)

const { User, Note } = require ('../models')
const { NotFoundError } = require ('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')


function listNotes(userId) { // recivimos el user id al que les buscaremos sus notas 
    validateStringNotEmptyNoSpaces(userId, 'user id')

    // User.findOne({ _id: userId})
    return User.findById(userId)
        .then((user) => {
            if(!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Note.find({ user: userId }).lean()       
        })
        .then((notes)=>{
            
            notes.forEach(note => {    // las limpio para no devolver indo de mongose
                note.id = note._id.toString()
                
                delete note._id
                delete note.__v
                delete note.user
            })

            return notes
        })
        
}


module.exports = listNotes
