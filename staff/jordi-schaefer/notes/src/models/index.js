const { model } = require('mongoose')
const { user, note, secret } = require('./schemas') 

const User = model('User', user)
const Note = model('Note', note)
const Secret = model('secret', secret)

module.exports = {
    User,
    Note,
    Secret
}