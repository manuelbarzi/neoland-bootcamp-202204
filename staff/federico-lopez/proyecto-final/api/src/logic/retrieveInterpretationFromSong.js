const { Song } = require("../models")
const { validateObjectId } = require('../validators')
const { NotFoundError } = require('errors')

async function retrieveInterpretationFromSong(songId, interpretationId) {
    validateObjectId(songId)
    validateObjectId(interpretationId)

    const song = await Song.findById(songId).populate({ path: 'interpretations', populate: { path: 'user', select: 'username' } }).lean()

    if (!song) throw new NotFoundError(`song with id ${songId} not found`)

    const interpretationFound = song.interpretations.find(interpretation => interpretationId === interpretation._id.toString())

    if (!interpretationFound) throw new NotFoundError(`interpretation with id ${interpretationId} not found`)

    interpretationFound.id = interpretationFound._id

    delete interpretationFound._id
    delete interpretationFound.__v

    return interpretationFound
}

module.exports = retrieveInterpretationFromSong