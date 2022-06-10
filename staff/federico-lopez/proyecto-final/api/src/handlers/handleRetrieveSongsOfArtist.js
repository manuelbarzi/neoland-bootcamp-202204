const { retrieveSongsOfArtist } = require('../logic')
const { handleErrorsAndRespond } = require('./helpers')

module.exports = async (req, res) => {
    try {
        const { params: { artistId } } = req
        
        const songsOfArtist = await retrieveSongsOfArtist(artistId)
        
        res.status(200).json(songsOfArtist)
        
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}