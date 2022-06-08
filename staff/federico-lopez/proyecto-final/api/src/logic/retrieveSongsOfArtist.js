const { NotFoundError } = require('../errors')
const { Song, Artist } = require('../models')
const { validateObjectId } = require('../validators')

async function retrieveSongsOfArtist(artist) {
    validateObjectId(artist)

    const artistExists = await Artist.findById(artist)

    if(!artistExists) throw new NotFoundError(`artist with id ${artist} not found`)

    const songs = await Song.find({ artist }).lean()

    return songs.map(song => {
        song.id = song._id.toString()
        delete song._id
        delete song.__v
        delete song.country
        delete song.genres
        delete song.album
        delete song.date
        delete song.interpretations

        return song
    })
}

module.exports = retrieveSongsOfArtist