const { updateAccount } = require('../logic')
const { verifyToken , handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try { 
        const userId = verifyToken(req)

        const { params: { accountId }, body: { type, text} } = req

        updateAccount(userId, accountId, type, text)
        .then(() => res.status(204).send())
        .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}