const { model } = require('mongoose')
const { user, spot, reaction, comment } = require('./schemas') 

const User = model('User', user)
const Spot = model('Spot', spot)
const Reaction = model('Reaction', reaction)

Reaction.LIKE = 0
Reaction.LOVE = 1
Reaction.LOL = 2
Reaction.SAD = 3
Reaction.ANGRY = 4
Reaction.WOW = 5

const Comment = model('Comment', comment)

module.exports = {
    User,
    Spot,
    Reaction,
    Comment
}