const { addProductToSchedule } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')


module.exports = (req, res) => {
    try {

        const userId = verifyToken(req)
        const { body: { day, productId, quantity } } = req //como api te pido del body el username i la password

        addProductToSchedule (userId, day, productId, quantity)
            .then((itemId) => res.status(201).send({itemId}))
            .catch (error => {handleErrorsAndRespond(error, res)})
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}