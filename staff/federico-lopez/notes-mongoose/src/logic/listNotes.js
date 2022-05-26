const { NotFoundError } = require("../errors")
const { Note, User } = require("../models")
const { validateObjectId } = require("../validators")

function listNotes(userId) {
    validateObjectId(userId)

    return User.findById({ _id: userId })
        .then(result => {
            if (result === null) throw new NotFoundError(`user with id ${userId} dos not exist`)
        })
        .then(() => {
            return Note.find({ user: userId })
        })
        .then(array => {
            return array.map(note => {
                note = note._doc
                note.id = note._id.toString()
                note.user = note.user.toString()

                delete note._id
                delete note.__v
                return note
            })
        })
}


module.exports = listNotes