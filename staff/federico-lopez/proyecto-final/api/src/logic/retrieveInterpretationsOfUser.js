const { NotFoundError } = require('errors')
const { User, Song } = require('../models')
const { validateObjectId } = require('../validators')

module.exports = async (userId) => {
    validateObjectId(userId)

    const user = await User.findById(userId)

    if (!user) throw new NotFoundError(`user with id ${userId} not found`)

    const songs = await Song.find({ 'interpretations.user': userId }).populate('artist').lean()

    const interpretations = []

    songs.forEach(song => {
        const userInterpretations = song.interpretations.filter(interpretation => interpretation.user.toString() === userId)

        userInterpretations.forEach(interpretation => {
            interpretation.id = interpretation._id.toString()
            interpretation.user = interpretation.user.toString()
            interpretation.songName = song.name
            interpretation.songId = song._id.toString()
            interpretation.artistName = song.artist.name
            interpretation.artistId = song.artist._id.toString()

            delete interpretation._id

            interpretations.push(interpretation)
        })
    })
    return interpretations
}