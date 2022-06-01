const { Note, User } = require("../models")
const { validateStringNotEmptyNoSpaces, validateString } = require('../validators')
const { NotFoundError, ConflictError } = require('../errors')

function updateNote (userId, noteId, text) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(noteId, 'note id')
    validateString (text, 'text')

    return User.findById(userId) //para que solo me envie el doc. Comprobamos si existe el usuario porque puede darse en la caso que en el momento en el que estoy actualizando una nota, alguien puede borrar el usuario.
        .then((user) => {
            if (!user) {
                throw new NotFoundError(`user with id ${userId} does not exist`)
            }

            return Note.findById(noteId) //no hace falta que especifique que es el noteId porque al buscarlo por id ya le digo que lo que le paso es un id
        })
        .then((note)=>{
            if (!note) {
                throw new NotFoundError(`note with id ${noteId} does not exist`)
            }
            
            if(note.user.toString() !== userId) throw new ConflictError(`note with id ${noteId} does not belong to user with id ${userId}`) //usamos toString para modificar el buf que es como nos llega de mongoose y poderlo comparar con el userid que yo tengo
            
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