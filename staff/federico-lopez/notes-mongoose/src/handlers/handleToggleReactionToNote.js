const { handleErrorsAndRespond } = require("./helpers")
const { verifyToken } = require('./helpers')
const { toggleReactionToNote } = require('../logic')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)
        const { body: { type }, params: { noteId } } = req

        return toggleReactionToNote(userId, noteId, type)
            .then(commentId => res.status(200).json({ commentId }))
            .catch(error => handleErrorsAndRespond(error, res))

    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}