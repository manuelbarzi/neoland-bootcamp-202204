const { retrieveSchedule } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')


module.exports =  (req, res) => { //al ser un method get, no le envio cuerpo, no hace falta el jsonBodyParser
    try {
        const userId = verifyToken (req) //le pido la funcion de jsonwebtoken de validacón del token que le pido para guardarlo como userId. 
        //El toquen sirve para proteger a mi servidor, no a la lógica, es por eso que en la lógica hay que enviarlo en forma de userId

        retrieveSchedule(userId)
            .then(schedule => res.status(200).json({schedule}))
            .catch (error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}