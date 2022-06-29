const { FormatError } = require('../errors') 
// declaro constante para no poner el churro entereo en la funcion
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


// Valido que sea sting
function validateString(string, explain = 'string') {
    if (typeof string !== 'string') throw new TypeError(`${explain} is not a string`)
}

// Valido que sea string que no este Vacio y que no este en blaco
function validateStringNotEmptyOrBlank(string, explain = 'string') {
    validateString(string, explain)
// si no tiene largo
    if (!string.length) throw new FormatError(`${explain} is empty`)

    if (!string.trim().length) throw new FormatError(`${explain} is blank`)
}
// Valido que sea  sting que no este vacio y que no tenga espacio
function validateStringNotEmptyNoSpaces(string, explain = 'string') {
    validateString(string, explain)

    if (!string.length) throw new FormatError(`${explain} is empty`)

    if (string.includes(' ')) throw new FormatError(`${explain} has spaces`)
}
// Valido que el token
function validateJwt(token) {
    validateString(token, 'token')
// separo por .
    const parts = token.split('.')
// miro que tenga 3 partes o que no sea menor a 0 
    if (parts.length !== 3 || !parts.every(part => part.length > 0)) throw new FormatError('invalid token format')
}
// Validacion de Contraseñas
function validatePassword(password, explain = 'password') {
    validateStringNotEmptyNoSpaces(password, explain)
// Valido qeu tenga mas de 8 caracteres
    if (password.length < 8)
        throw new FormatError(`${explain} length is lower than 8`)
}
// Validacion de Nombre de Usuario
function validateUsername(username) {
    validateStringNotEmptyNoSpaces(username, 'username')
// Que tenga mas de 4 caracteres
    if (username.length < 4)
        throw new FormatError('username length is lower than 4')
}
// Validacion de Funcion
function validateFunction(func, explain = 'function') {
    // Validacion que sea de tipo funcion
    if (typeof func !== 'function')
        throw new TypeError(`${explain} is not a function`)
}
// Validacion de Fecha
function validateDate(date, explain = 'date') {
    // que sea instancia de fecha 
    if (!(date instanceof Date)) throw new TypeError(`${explain} is not Date`)
}
// Validacion de Numero
function validateNumber(number, explain = 'number') {
    
    if (typeof number !== 'number') throw new TypeError(`${explain} is not a number`)
}
// Validacion de Numero Positivo
function validatePositiveInteger(number, explain = 'number') {
    validateNumber(number, explain)
// Metodo inteno de Js para validar si en un numero entero
    if (!Number.isInteger(number)) throw new FormatError(`${explain} is not an integer`)
// Rango de numero entr 0 y 150
    if (number < 0 || number > 150) throw new RangeError(`${explain} is lower than 0 or greater than 150`)
}
// Validacion de Email
function validateEmail(email, explain = 'email') {

// Si el email no pasa el test ( condiciones REFEX ) no es un email
    if (!EMAIL_REGEX.test(email))
        throw new FormatError(`${explain} is not an email`)
}

module.exports = {
    validateString,
    validateStringNotEmptyOrBlank,
    validateStringNotEmptyNoSpaces,
    validateJwt,
    validatePassword,
    validateUsername,
    validateFunction,
    validateDate,
    validateNumber,
    validatePositiveInteger,
    validateEmail
}