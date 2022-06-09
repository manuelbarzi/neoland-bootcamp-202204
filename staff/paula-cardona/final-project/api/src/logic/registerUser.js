const { User } = require('../models')
const { ConflictError } = require('../errors')
const {validateStringNotEmptyOrBlank, validatePassword, validateUsername, validateEmail} = require('../validators')

function registerUser(name, surname, username, email, password, address) { //creamos la función createUser y le pasamos por parametros name, username y password
    validateStringNotEmptyOrBlank(name, 'name')
    validateStringNotEmptyOrBlank(surname, 'surname')
    validateUsername(username)
    validateEmail(email)
    validatePassword(password)
    validateStringNotEmptyOrBlank (address)

    return User.create({ name, surname, username, email, password, address }) // funcion para crear el uuario con los parametros que nos llegan arriba
        .then((/*resultDeCreate*/) => {/* hago algo y devuelvo algo, si me interesa */}) // este then captura la respuesta del user create
        // pero esta vacio porque no nos interesa recivir ni devolver nada
        // si quitas el then o lo dejas con solo parentesis vacios .then()
        // te devuelve automaticamente la respuesta

        //es la unica función que tiene CATCH ya que mongoose pare registerUser caza el error
        .catch(error => {  // si create nos devuelve un error SINCRONO 
            if (error.code = 11000) // (de duplicate o de syntax error)
                throw new ConflictError(`user with username ${username} already exists`) // lanzamos error de que ya existe
            
            throw error // sino lanzamos el error que sea
        })
}

module.exports = registerUser