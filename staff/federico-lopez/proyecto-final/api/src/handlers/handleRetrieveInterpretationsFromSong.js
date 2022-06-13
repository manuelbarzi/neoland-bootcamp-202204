const { retrieveInterpretationsFromSong } = require("../logic")
const { handleErrorsAndRespond } = require("./helpers")


module.exports = async (req, res) => {
    try {
        const { params: { songId } } = req

        const interpretations = await retrieveInterpretationsFromSong(songId)

        res.status(200).json(interpretations)
    } catch(error) {
        handleErrorsAndRespond(error, res)
    }
}