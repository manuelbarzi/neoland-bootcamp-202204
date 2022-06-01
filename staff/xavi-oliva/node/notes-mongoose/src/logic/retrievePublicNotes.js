const { User, Note } = require ('../models')
const { NotFoundError } = require ('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')


function retrievePublicNotes(userId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')

    return User.findById(userId)
        .then((user) => {
            if(!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Note.find({ user: userId, audience: 1 }).lean()       
        })
        .then((notes)=>{
            notes.forEach(note => { 
                note.id = note._id.toString()
                
                delete note._id

                delete note.__v

                delete note.user
            })

            return notes
        })
}

module.exports = retrievePublicNotes