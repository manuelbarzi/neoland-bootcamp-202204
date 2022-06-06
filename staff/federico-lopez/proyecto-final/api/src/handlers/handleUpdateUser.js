const { updateUser } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = async (req, res) => {
    try {
        const userId = verifyToken(req)

        const { body: { name, surname, dateOfBirth } } = req

        await updateUser({ userId, name, surname, dateOfBirth })
        
        res.status(204).send()
        
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}