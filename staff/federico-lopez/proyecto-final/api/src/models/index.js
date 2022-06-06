const { model } = require('mongoose')
const { comment, interpretation, user, artist, song } = require('./schemas')

const Comment = new model('Comment', comment)
const Interpretation = new model('Interpretation', interpretation)
const User = new model('User', user)
const Artist = new model('Artist', artist)
const Song = new model('Song', song)

module.exports = {
    Comment,
    Interpretation,
    User,
    Artist,
    Song
}