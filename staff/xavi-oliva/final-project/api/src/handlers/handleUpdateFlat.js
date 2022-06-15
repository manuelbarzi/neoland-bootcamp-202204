const { updateFlat } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')


module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { params: { flatId }, body: { title, description, address, images } } = req

        updateFlat(userId, flatId, title, description, address, images)
        .then(() => res.status(204).send())
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}