const { model } = require('mongoose')
const { user, note, comment } = require('./schemas') 

const User = model('User', user)
const Note = model('Note', note)
const Comment = model('Comment', comment)

module.exports = {
    User,
    Note,
    Comment
}