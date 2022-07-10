const { addMovement } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {

        const userId = verifyToken(req)

        const { body: { type, category, concept, amount, account } } = req

        addMovement(userId, type, category, concept, amount, account)
        .then(movementId => res.status(201).json({ movementId }))
        .catch(error => handleErrorsAndRespond(error, res))
    
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}