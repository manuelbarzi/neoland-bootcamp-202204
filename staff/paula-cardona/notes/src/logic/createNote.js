const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces, validateString } = require('../validators')

function createNote(userId, text) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    if (text != null)  validateString(text, 'text')

    return User.findById(userId) //para saber si pertenece a un usuario existente y no estará en el aire
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Note.create({ user: userId, text })
        })
        .then(note => note.id)
}

module.exports = createNote
//note.id es la propiedad id de la nota
//noteId es el nombre que le pongo como resultado de note.id para el navegador