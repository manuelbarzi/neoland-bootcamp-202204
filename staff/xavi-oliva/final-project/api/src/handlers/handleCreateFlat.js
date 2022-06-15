const { createFlat } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')


module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { body: { title, description, address, images } } = req

        createFlat(userId, title, description, address, images)
            .then(flatId => res.status(201).json({ flatId }))
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}