const findArtists = require('./findArtists')
const findSongs = require('./findSongs')
const findUsers = require('./findUsers')

module.exports = async query => {
    const artists = await findArtists(query)
    const songs = await findSongs(query)
    const users = await findUsers(query)

    return { artists, songs, users }
}