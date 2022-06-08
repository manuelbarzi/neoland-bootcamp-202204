const { createSong } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = async (req, res) => {
    try {
        const userId = verifyToken(req)

        const { body: { artist, name, genres, album, date } } = req

        const song = await createSong(userId, { artist, name, genres, album, date })

        res.status(201).json(song)

    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}