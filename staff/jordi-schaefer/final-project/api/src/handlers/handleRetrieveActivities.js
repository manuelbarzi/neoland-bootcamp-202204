const { retrieveActivities } = require('../logic')
const { handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {  
        retrieveActivities()
            .then(activities => res.status(200).json({activities}))  // devuelvo estatus ok y el token
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}