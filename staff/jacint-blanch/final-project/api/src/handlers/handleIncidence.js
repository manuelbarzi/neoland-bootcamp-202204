const { createIncidence } = require('../logic')
const { handleErrorsAndRespond, verifyToken } = require('./helpers')

module.exports = (req, res) => { 
    try {
        const { body: {latitude, longitude, description } } = req
        const userId = verifyToken(req)


        createIncidence(latitude, longitude, description, userId)
            .then(() => res.status(201).send())
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}