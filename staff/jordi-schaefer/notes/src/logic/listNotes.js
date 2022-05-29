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
                debugger
                delete note._id
                delete note.__v
                delete note.user
            })

            return notes
        })
        
}


module.exports = listNotes