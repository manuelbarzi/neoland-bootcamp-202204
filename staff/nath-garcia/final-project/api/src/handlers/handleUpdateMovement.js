const { updateMovement } = require('../logic')
const { verifyToken , handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { params: { movementId }, body: { type, category, concept, amount } } = req

        updateMovement(userId, movementId, type, category, concept, amount)
        .then(() => res.status(204).send())
        .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}