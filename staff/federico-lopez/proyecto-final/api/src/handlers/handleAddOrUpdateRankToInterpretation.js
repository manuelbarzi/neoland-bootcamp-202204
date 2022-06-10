const { addOrUpdateRankToInterpretation } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = async (req, res) => {
    try {
        const userId = verifyToken(req)

        const { params: { songId, interpretationId }, body: { rankAmount } } = req

        await addOrUpdateRankToInterpretation(userId, songId, interpretationId, rankAmount)

        res.status(201).send()
    } catch (error) {
        handleErrorsAndRespond(error, response)
    }
}