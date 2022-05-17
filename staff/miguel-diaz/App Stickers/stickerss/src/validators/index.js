import {FormatError} from '../errors'

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
    validateString(token, 'token')

    const parts = token.split('.')

    if (parts.length !== 3 || !parts.every(part => part.length > 0)) throw new FormatError('invalid token format')
}

function validatePassword(password, explain = 'password') {
    validateString(password, explain)

    if (password.length < 8)
        throw new FormatError(`${explain} length is lower than 8`)
}

function validateUserName(username) {
    validateStringNotEmptyNoSpaces(username, 'username')

    if(username.lenght < 2)
        throw new FormatError('userame lenght is lower than 4')
}


export {
    validateString,
    validateStringNotEmptyOrBlank,
    validateStringNotEmptyNoSpaces,
    validateJwt,
    validatePassword,
    validateUserName
}

// function validateSveNotes(token)

// function validateLogin(username, password, explain){
//     const explain = ('username', 'password')
//     validateString(username, password, explain)
// }

// function validateRegisterUser(name, username, password, explain = 'name') {
    
// }