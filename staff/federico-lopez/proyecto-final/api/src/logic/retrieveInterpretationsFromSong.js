const { Song } = require("../models")
const { validateObjectId } = require("../validators")
const { NotFoundError } = require('../errors')

async function retrieveInterpretationsFromSong(songId) {
    validateObjectId(songId)
    debugger
    const song = await Song.findById(songId).lean()

    if(!song) throw new NotFoundError(`song with id ${songId} not found`)

    const interpretations = song.interpretations.map(interpretation => {
        interpretation.id = interpretation._id.toString()
        delete interpretation._id
        delete interpretation.__v

        return interpretation
    })

    return interpretations
}

module.exports = retrieveInterpretationsFromSong