const { updateUserPassword } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { body: { oldPassword, password } } = req

        updateUserPassword(userId, oldPassword, password)
            .then(() => res.status(204).send())
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}