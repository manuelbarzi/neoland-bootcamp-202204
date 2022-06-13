const { model } = require('mongoose')
const { user, reaction, comment, incidence } = require('./schemas') 

const User = model('User', user)
const Reaction = model('Reaction', reaction)
const Incidence = model('Incidence', incidence)

Reaction.LIKE = 0
Reaction.LOVE = 1
Reaction.LOL = 2
Reaction.SAD = 3
Reaction.ANGRY = 4
Reaction.WOW = 5

const Comment = model('Comment', comment)

module.exports = {
    User,
    Reaction,
    Comment,
    Incidence
}