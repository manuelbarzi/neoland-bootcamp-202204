const { retrieveIncidenceNearMe } = require('../logic')
const { handleErrorsAndRespond, verifyToken} = require('./helpers')


module.exports = (req, res) => { 
    try {
       const {params: {lat, long}} = req;

       retrieveIncidenceNearMe(lat, long)
            .then(user => res.status(200).json(user))
            .catch(error => handleErrorsAndRespond(error, res))
    } catch(error) {
        handleErrorsAndRespond(error, res)
    }
}