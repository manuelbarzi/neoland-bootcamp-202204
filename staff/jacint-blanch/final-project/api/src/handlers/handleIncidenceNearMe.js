const { retrieveIncidenceNearMe } = require('../logic')
const { handleErrorsAndRespond, verifyToken} = require('./helpers')


module.exports = (req, res) => { 
    try {
       var lat = req.params.lat
       var long = req.params.long
       retrieveIncidenceNearMe(lat, long)
            .then(result => res.status(200).json(result))
            .catch(error => handleErrorsAndRespond(error, res))
    } catch(error) {
        handleErrorsAndRespond(error, res)
    }
}