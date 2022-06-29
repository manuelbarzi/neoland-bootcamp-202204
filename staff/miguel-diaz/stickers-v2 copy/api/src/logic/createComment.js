const { User, Note, Comment } = require('../models')
const { NotFoundError } = require('../errors')



function createComment(userId, noteId, text, likes) {

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Comment.create({ user: userId, text, likes})
        })
        .then((comment) => {

            return Note.updateOne({ _id: noteId }, { $push: { comment } })
        })
        .then(() =>{  })

}


module.exports = createComment

