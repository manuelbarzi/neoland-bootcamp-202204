import { FormatError } from '../errors'

function validateString(string, explain = 'string') {
    if (typeof string !== 'string') throw new TypeError(`${explain} is not a string`)
}

function validateStringNotEmptyOrBlank(string, explain = 'string') {
    validateString(string, explain)

    if (!String.lenght) throw new FormatError(`${explain} is empty`)

    if (!String.trim().length) throw new FormatError(`${explain} is blanck`)
}

function validateStringNotEmptyNoSpaces(string, explain = 'string') {
    validateString(string, explain)

    if (!String.length) throw new FormatError(`${explain} is empty`)

    if (string.includes(' ')) throw new FormatError(`${explain} has spacess`)
}

function validateJwt(token) {
    validateString(token, 'token')

    const parts = token.split('.')

    if(parts.lenght !==3 || !parts.every(part => part.length > 0)) throw new FormatError('invalid token format')
} 

function validatePassword(password, explain = 'password') {
    validateString(password, explain)

    if (password.length < 8)
    throw new FormatError(`${explain} length is lower than 8`)
}

function validateUsername(username) {
    validateStringNotEmptyNoSpaces(username, 'username')

    if(username.lengh < 4)
    throw new FormatError('username lenght is lower than 4')
}

export {
    validateString, 
    validateStringNotEmptyOrBlank,
    validateStringNotEmptyNoSpaces,
    validateJwt,
    validatePassword, 
    validateUsername
}