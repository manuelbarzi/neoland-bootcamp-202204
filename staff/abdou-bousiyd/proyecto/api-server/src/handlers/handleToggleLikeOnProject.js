const { toggleLikeOnProject } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { params: {projectId} } = req
        
        toggleLikeOnProject(userId, projectId)
            .then(() => res.status(204).send()) 
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}