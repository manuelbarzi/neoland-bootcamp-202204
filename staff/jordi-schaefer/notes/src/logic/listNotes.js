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
            
            return notes
        })
        
}


module.exports = listNotes