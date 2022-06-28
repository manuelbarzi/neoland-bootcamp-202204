const { User, Schedule } = require('../models')
const { ConflictError } = require('../errors')
const {validateStringNotEmptyOrBlank, validatePassword, validateUsername, validateEmail} = require('../validators')

function registerUser(name, username, email, password, address) { //creamos la función createUser y le pasamos por parametros name, username y password
    validateStringNotEmptyOrBlank(name, 'name')
    validateUsername(username)
    validateEmail(email)
    validatePassword(password)
    validateStringNotEmptyOrBlank (address)
debugger
    return User.create({ name, username, email, password, address }) // funcion para crear el uuario con los parametros que nos llegan arriba
        .then((userId)=>{
            Schedule.create({ user: userId })
            
    
        })    
        .then(() => {/* hago algo y devuelvo algo, si me interesa */}) // este then captura la respuesta del user create
        

        
        .catch(error => {  // si create nos devuelve un error SINCRONO 
            if (error.code = 11000) // (de duplicate o de syntax error)
                throw new ConflictError(`user with username ${username} already exists`) // lanzamos error de que ya existe
            
            throw error // sino lanzamos el error que sea
        })
}

module.exports = registerUser