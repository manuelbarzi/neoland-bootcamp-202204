const { User, Note} = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces} = require('../validators')

function deleteCommentFromNote(userId, noteId, commentId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(noteId, 'note id')
    validateStringNotEmptyNoSpaces(commentId, 'note id')

    return User.findById(userId) //para saber si pertenece a un usuario existente y no estará en el aire
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Note.findById(noteId)
        })
        .then(note => {

            if (!note) throw new NotFoundError(`note with id ${noteId} does not exist`)

            const index = note.comments.findIndex(comment => comment._id.toString() === commentId)

            if (index < 0) {
                throw new NotFoundError(`comment with id ${commentId} does not exist`)
            }
            //en el array de comentarios eliminare el q sea === comment.id
            
            note.comments.splice(index,1)

            return note.save()
        })    
        .then(() => {}) //no puedo poner comment.id porque es como una funcion


}
                

module.exports = deleteCommentFromNote



/*

Funcion, recive (userId, noteId, commentId)

-lo primero que hago es ver si userId existe
-ver si noteid existe
-ver si comment esta en noteid
-si esta lo eliminamos de noteid
-subo o actualizo la nota en la base de datos
- devuelvo? nada



IMPORTANTE: el indeex de manu tiene pistas de como buscar / añadir y borrar comentarios en notas

*/