const { User, Note } = require("../models")
const { validateStringNotEmptyNoSpaces, validateString } = require('../validators')
const { NotFoundError } = require('../errors')

function updateNote (userId, noteId, text) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(noteId, 'note id')
    validateString (text, 'text')

    return Note.findById(noteId)
        .then((note)=>{
            if (!note) {
                throw new NotFoundError(`note with id ${noteId} does not exist`)
            }
            return User.findById(userId)

        })
        .then ((user)=>{
            if (!user) {
                throw new NotFoundError(`user with id ${userId} does not exist`)
            }

            return Note.updateOne({_id: noteId, user: userId},{$set: {text: text}}) //Actualizo por propiedades. si la propiedad se llama igual que la variable que le paso podemos ponerlo un vez: text

        })
        .then(() => {}) //esta linea lo hago porque al actualizar la nota no quiero devolver nada.

    

}

module.exports = updateNote


/*
busco una nota para saber si existe
busco si el user existe
cambio el fucking texto
no devuelvo nada



*/