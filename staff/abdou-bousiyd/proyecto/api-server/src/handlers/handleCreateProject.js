const { createProject } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)
        const {body: {title, code}} = req

        createProject(userId, title, code)
            .then(projectId => res.status(201).send({projectId}))
            .catch(error => handleErrorsAndRespond(error, res))
    }catch(error) {
        handleErrorsAndRespond(error, res)
    }
}