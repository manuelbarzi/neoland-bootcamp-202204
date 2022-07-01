const { toggleReactionOnComment } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { params: {noteId, commentId, reaction} } = req
        
        toggleReactionOnComment(userId, noteId, commentId, reaction)
            .then(() => res.status(204).send())  // devuelvo result para ver quehay
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}