module.exports = {
    /* USERS */
    registerUser: require('./registerUser'),
    authenticateUser: require('./authenticateUser'),
    userExists: require('./userExists'),
    updatePassword: require('./updatePassword'),
    retrieveUser: require('./retrieveUser'),
    retrieveUserByUsername: require('./retrieveUserByUsername'),
    retrieveInterpretationsOfUser: require('./retrieveInterpretationsOfUser'),
    updateUser: require('./updateUser'),
    updateUserImage: require('./updateUserImage'),
    toggleFollow: require('./toggleFollow'),
    getUserImage: require('./getUserImage'),
    unregisterUser: require('./unregisterUser'),

    /* ARTISTS */
    createArtist: require('./createArtist'),
    findArtists: require('./findArtists'),
    getTopArtists: require('./getTopArtists'),

    /* SONGS */
    createSong: require('./createSong'),
    findSongs: require('./findSongs'),
    retrieveSongsOfArtist: require('./retrieveSongsOfArtist'),
    retrieveSong: require('./retrieveSong'),

    /* SEARCH */
    findArtistsSongsAndUsers: require('./findArtistsSongsAndUsers'),

    /* INTEPRRETATIONS */
    addInterpretationToSong: require('./addInterpretationToSong'),
    retrieveInterpretationsFromSong: require('./retrieveInterpretationsFromSong'),
    retrieveInterpretationFromSong: require('./retrieveInterpretationFromSong'),
    removeInterpretationFromSong: require('./removeInterpretationFromSong'),

    /* RANK */
    toggleOrUpdateRankToInterpretation: require('./toggleOrUpdateRankToInterpretation'),
    
    /* COMMENTS */
    addCommentToInterpretation: require('./addCommentToInterpretation'),
    removeCommentFromInterpretation: require('./removeCommentFromInterpretation'),

    /* SPOTIFY */
    checkSpotifySession: require('./checkSpotifySession'),
    requestSpotifyAccessToken: require('./requestSpotifyAccessToken')
}