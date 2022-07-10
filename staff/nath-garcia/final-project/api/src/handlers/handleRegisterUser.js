const { registerUser } = require('../logic')
const { handleErrorsAndRespond }  = require('./helpers')

module.exports = (req, res) => {
    try {
        const { body: { name, surname, username, email, phone,  password } } = req

        registerUser(name, surname, username, email, phone,  password)
            .then(() => res.status(201).send())
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}