const { handleErrorsAndRespond, verifyToken } = require("./helpers")
const { getTopArtists } = require('../logic')

module.exports = async (req, res) => {
    try {
        debugger
        const userId = verifyToken(req)
        const { body: { access_token } } = req

        const topArtists = await getTopArtists(userId, access_token)
        debugger
        res.status(200).json(topArtists)

    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}