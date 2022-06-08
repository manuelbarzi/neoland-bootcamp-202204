const retrieveArtists = require('./retrieveArtists')
const retrieveSongs = require('./retrieveSongs')

async function retrieveArtistsAndSongs(query) {
    const artists = await retrieveArtists(query)
    const songs = await retrieveSongs(query)

    return { artists, songs }
}

module.exports = retrieveArtistsAndSongs