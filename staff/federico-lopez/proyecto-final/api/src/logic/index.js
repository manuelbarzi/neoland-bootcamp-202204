module.exports = {
    /* USERS */
    registerUser: require('./registerUser'),
    authenticateUser: require('./authenticateUser'),
    retrieveUser: require('./retrieveUser'),
    updateUser: require('./updateUser'),
    unregisterUser: require('./unregisterUser'),

    /* ARTISTS */
    createArtist: require('./createArtist'),
    retrieveArtists: require('./retrieveArtists'),

    /* SONGS */
    createSong: require('./createSong'),
    retrieveSongs: require('./retrieveSongs'),
    retrieveSongsOfArtist: require('./retrieveSongsOfArtist'),
    retrieveSong: require('./retrieveSong'),

    /* ARTISTS AND SONGS */
    retrieveArtistsAndSongs: require('./retrieveArtistsAndSongs'),

    /* INTEPRRETATIONS */
    addInterpretationToSong: require('./addInterpretationToSong'),
    retrieveInterpretationsFromSong: require('./retrieveInterpretationsFromSong'),
    retrieveInterpretationFromSong: require('./retrieveInterpretationFromSong'),
    removeInterpretationFromSong: require('./removeInterpretationFromSong'),

    /* RANK */
    addOrUpdateRankToInterpretation: require('./addOrUpdateRankToInterpretation.js')
}