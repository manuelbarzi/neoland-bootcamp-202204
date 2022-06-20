const { addProductToSchedule } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')


module.exports = (req, res) => {
    try {

        const userId = verifyToken(req)
        const { body: { day, productId } } = req //como api te pido del body el username i la password

        addProductToSchedule (userId, day, productId )
            .then(() => res.status(204).send())
            .catch (error => {handleErrorsAndRespond(error, res)})
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}