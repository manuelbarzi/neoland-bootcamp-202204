
const { Event, User} = require("../models");
const { validateStringNotEmptyNoSpaces } = require("../validators");
const { NotFoundError } = require('../errors');


function myEvent(userId, eventId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(eventId, 'event id')
   
    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Event.findById(eventId)
        })
        .then(event => {
            if (!event) throw new NotFoundError(`note with id ${noteId} does not exist`)

            const userComment = new Comment({ user: userId, text: text})
            note.comments.push(userComment)

            return note.save()
                .then(() => {
                    return userComment.id
                })
        })

}

module.exports = myEvent 