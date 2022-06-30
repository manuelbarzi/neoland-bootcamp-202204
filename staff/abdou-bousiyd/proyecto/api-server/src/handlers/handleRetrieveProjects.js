const { retrieveProjects } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try{
        const userId = verifyToken(req)

        retrieveProjects(userId)
            .then(projects => res.status(200).json(projects))
            .catch(error => handleErrorsAndRespond(error, res))
    }catch(error) {
        handleErrorsAndRespond(error, res)
    }
}