const { retrieveInterpretationFromSong } = require("../logic")
const { handleErrorsAndRespond } = require("./helpers")


module.exports = async (req, res) => {
    try {
        const { params: { songId, interpretationId } } = req

        const interpretation = await retrieveInterpretationFromSong(songId, interpretationId)

        res.status(200).json(interpretation)
    } catch(error) {
        handleErrorsAndRespond(error, res)
    }
}