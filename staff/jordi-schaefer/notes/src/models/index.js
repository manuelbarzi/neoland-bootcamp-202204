const { model } = require('mongoose')
const { user, note, comment, reaction } = require('./schemas') 

const User = model('User', user)
const Note = model('Note', note)
const Comment = model('Comment', comment)
const Reaction = model('Reaction', reaction)

Reaction.LIKE = 0
Reaction.LOVE = 1
Reaction.LOL = 2
Reaction.SAD = 3
Reaction.ANGRY = 4
Reaction.WOW = 5

module.exports = {
    User,
    Note,
    Comment,
    Reaction
}