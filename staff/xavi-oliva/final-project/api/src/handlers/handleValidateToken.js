const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = async (req, res) => {
    try {
        verifyToken(req)
        
        res.status(200).send()
        
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}