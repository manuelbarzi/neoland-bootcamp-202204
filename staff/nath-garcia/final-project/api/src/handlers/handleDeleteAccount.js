const { deleteAccount } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { params: { accountId } } = req
        
        deleteAccount(userId, accountId)
        .then(() => res.status(204).send())
        .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}