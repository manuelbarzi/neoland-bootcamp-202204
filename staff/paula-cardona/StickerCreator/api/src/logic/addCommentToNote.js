const { User, Note, Comment } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces, validateString } = require('../validators')

function addCommentToNote(userId, noteId, text) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(noteId, 'note id')
    if (text != null)  validateString(text, 'text')

    return User.findById(userId) //para saber si pertenece a un usuario existente y no estará en el aire
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Note.findById(noteId)
        })
        .then(note => {
            if (!note) throw new NotFoundError(`note with id ${noteId} does not exist`)

            const comment = new Comment({user: userId, text}) //no hace falta poner noteId porque el comentario estará dentro de la nota y porque una persona puede comentar sin tener nota
            
            note.comments.push(comment)

            return note.save()
            
                .then(() => { //no puedo poner comment.id porque es como una funcion
                    return comment.id
                })
        }) 

}

module.exports = addCommentToNote
//note.id es la propiedad id de la nota
//noteId es el nombre que le pongo como resultado de note.id para el navegador