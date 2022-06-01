const { addCommentToNote } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { params: {noteId}, body: { text } } = req
        
        addCommentToNote(userId, noteId, text)
        .then(commentId => res.status(201).json({ commentId }))  
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}