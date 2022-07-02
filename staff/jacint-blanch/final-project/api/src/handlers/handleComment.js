const { createComment } = require('../logic')
const { handleErrorsAndRespond, verifyToken } = require('./helpers')

module.exports = (req, res) => { 
    try {
        const { body: { chat, incidentsId } } = req
 
        const userId = verifyToken(req)


        createComment(chat, incidentsId, userId)
            .then(() => res.status(201).send())
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}