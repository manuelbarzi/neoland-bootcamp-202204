const { findArtistsSongsAndUsers } = require('../logic')
const { handleErrorsAndRespond } = require('./helpers')

module.exports = async (req, res) => {
    try {
        debugger
        const { query: { q: query } } = req

        const results = await findArtistsSongsAndUsers(query)
        
        res.status(200).json(results)
        
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}