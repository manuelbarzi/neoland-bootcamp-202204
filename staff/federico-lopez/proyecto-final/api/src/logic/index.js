module.exports = {
    registerUser: require('./registerUser'),
    authenticateUser: require('./authenticateUser'),
    retrieveUser: require('./retrieveUser'),
    updateUser: require('./updateUser'),
    unregisterUser: require('./unregisterUser'),
    createArtist: require('./createArtist'),
    retrieveArtists: require('./retrieveArtists'),
    createSong: require('./createSong'),
    retrieveSongs: require('./retrieveSongs'),
    retrieveSongsOfArtist: require('./retrieveSongsOfArtist'),
    retrieveArtistsAndSongs: require('./retrieveArtistsAndSongs'),
    addInterpretationToSong: require('./addInterpretationToSong'),
    retrieveInterpretationsFromSong: require('./retrieveInterpretationsFromSong'),
    addOrUpdateRankToInterpretation: require('./addOrUpdateRankToInterpretation.js')
}