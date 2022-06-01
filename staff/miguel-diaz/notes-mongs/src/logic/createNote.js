const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces, validateString } = require('../validators')


function createNote(userId, text){
    validateStringNotEmptyNoSpaces(userId, 'user id')
    if(text != null) validateString(text, 'text')

    return User.findById(userId)
        .then(user => {
            if(!user) throw new NotFoundError(`user with ${userId} does no exist`)

            return Note.create({user: userId, text})
        })
        .then(note => note.id)
}

module.exports = createNote