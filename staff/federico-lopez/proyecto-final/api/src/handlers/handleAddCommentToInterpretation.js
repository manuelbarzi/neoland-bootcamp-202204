const { addCommentToInterpretation } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = async (req, res) => {
    try {
        const userId = verifyToken(req)

        const { body: { text }, params: { interpretationId } } = req

        const commentId = await addCommentToInterpretation(userId, interpretationId, text)

        res.status(201).json({ commentId })
    } catch (error) {
        handleErrorsAndRespond(error, response)
    }
}