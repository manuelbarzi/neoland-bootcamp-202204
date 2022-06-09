const { addComment } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { params: {activityId}, body: { text } } = req
        
        addComment(userId, activityId, text)
        .then(commentId => res.status(201).json({ commentId }))  
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}