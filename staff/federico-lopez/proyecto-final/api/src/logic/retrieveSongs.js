const { Song } = require('../models')
const { validateStringNotEmptyOrBlank } = require('validators')

async function retrieveSongs(query) {
    validateStringNotEmptyOrBlank(query)

    const re = new RegExp(query)

    const songs = await Song.find({ name: { $regex: re , $options: 'i' }}).populate('artist', 'name').lean()

    return songs.map(song => {
        debugger
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

module.exports = retrieveSongs