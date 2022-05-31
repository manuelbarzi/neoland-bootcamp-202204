const { handleToggleReactionOnNote } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { params: {noteId}, body: { type } } = req
        
        handleToggleReactionOnNote(userId, noteId, type)
            .then(() => res.status(204).send())  // devuelvo result para ver quehay
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}