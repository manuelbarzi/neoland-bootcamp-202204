const { FormatError, AuthError } = require('errors')

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function validateString(string, explain = 'string') {
    if (typeof string !== 'string') throw new TypeError(`${explain} is not a string`)
}

function validateStringNotEmptyOrBlank(string, explain = 'string') {
    validateString(string, explain)

    if (!string.length) throw new FormatError(`${explain} is empty`)

    if (!string.trim().length) throw new FormatError(`${explain} is blank`)
}

function validateStringNotEmptyNoSpaces(string, explain = 'string') {
    validateString(string, explain)

    if (!string.length) throw new FormatError(`${explain} is empty`)

    if (string.includes(' ')) throw new FormatError(`${explain} has spaces`)
}

function validateJwt(token) {
    const hasPartsFull = token.split('.').every(part => part.length > 0)

    if (token.split('.').length !== 3 || !hasPartsFull) throw new AuthError('invalid token')

    const otherFormatPart2 = token.split('.')[1]
    
    const jsonPart2 = atob(otherFormatPart2)

    const part2 = JSON.parse(jsonPart2)

    const { exp } = part2

    if(exp < Math.round(Date.now()/1000)) throw new AuthError('token expired')
}

function isValidJWT(token) {
    try {
        validateJwt(token)

        return true
    } catch(error) {
        return false
    }
}

function validatePassword(password, explain = 'password') {
    validateStringNotEmptyNoSpaces(password, explain)

    if (password.length < 8)
        throw new FormatError(`${explain} length is lower than 8`)
}

function validateUsername(username) {
    validateStringNotEmptyNoSpaces(username, 'username')

    if (username.length < 4)
        throw new FormatError('username length is lower than 4')
}

function validateFunction(func, explain = 'function') {
    if (typeof func !== 'function')
        throw new TypeError(`${explain} is not a function`)
}

function validateDate(date, explain = 'date') {
    if (!(date instanceof Date)) throw new TypeError(`${explain} is not Date`)
}

function validateNumber(number, explain = 'number') {
    if (typeof number !== 'number') throw new TypeError(`${explain} is not a number`)
}

function validatePositiveInteger(number, explain = 'number') {
    validateNumber(number, explain)

    if (!Number.isInteger(number)) throw new FormatError(`${explain} is not an integer`)

    if (number < 0 || number > 150) throw new RangeError(`${explain} is lower than 0 or greater than 150`)
}

function validateEmail(email, explain = 'email') {
    if (!EMAIL_REGEX.test(email))
        throw new FormatError(`${explain} is not an email`)
}

module.exports = {
    validateString,
    validateStringNotEmptyOrBlank,
    validateStringNotEmptyNoSpaces,
    validateJwt,
    isValidJWT,
    validatePassword,
    validateUsername,
    validateFunction, 
    validateDate,
    validateNumber,
    validatePositiveInteger,
    validateEmail
}