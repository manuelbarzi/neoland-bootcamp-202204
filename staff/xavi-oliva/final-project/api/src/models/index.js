const { model } = require('mongoose')
const { user, apartment, reaction, comment } = require('./schemas') 

const User = model('User', user)
const Apartment = model('Apartment', apartment)

Apartment.AVAILABLE = 0
Apartment.TAKEN     = 1

// const Reaction = model('Reaction', reaction)

// Reaction.LIKE  = 0
// Reaction.LOVE  = 1
// Reaction.LOL   = 2
// Reaction.SAD   = 3
// Reaction.ANGRY = 4
// Reaction.WOW   = 5

// const Comment = model('Comment', comment)

module.exports = {
    User,
    Apartment,
    // Reaction,
    // Comment
}