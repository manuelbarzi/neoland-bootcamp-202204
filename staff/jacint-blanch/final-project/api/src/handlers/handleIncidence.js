const { createIncidence } = require('../logic')
const { handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => { 
    try {
        const { body: {latitude, longitude, description } } = req

        createIncidence(latitude, longitude, description)
            .then(() => res.status(201).send())
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}