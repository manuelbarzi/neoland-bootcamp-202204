import { FormatError, AuthError } from '../errors/index'

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



function validateString(string, explain = 'string') {
    if (typeof string !== 'string') throw new TypeError(`${explain} is not a string`)
}


function validatePassword(password, explain = 'password') {
    validateString(password, explain)

    if (password.length < 8)
        throw new FormatError(`${explain} length is lower than 8`)
}



function validateJwt(token) {
    validateString(token, 'token')

    const parts = token.split('.')

    if (parts.length !== 3 || !parts.every(part => part.length > 0)) throw new FormatError('invalid token format')

    const [,b64Payload] = parts

    const jsonPayload = atob(b64Payload)

    const payload = JSON.parse(jsonPayload) 

    const { exp } = payload

    const now = Math.round(Date.now() / 1000)

    if (now > exp) throw new AuthError('token expired')
}

function isJwtValid(token) {
    try {
        validateJwt(token)

        return true
    } catch(error) {
        return false
    }
}

function validateEmail(email, explain = 'email') {
    if (!EMAIL_REGEX.test(email))
        throw new FormatError(`${explain} is not an email`)
}

function validateNumber(number, explain = 'number') {
    if (typeof number !== 'number') throw new TypeError(`${explain} is not a number`)
}

function validateStringNotEmptyNoSpaces(string, explain = 'string') {
    validateString(string, explain)

    if (!string.length) throw new FormatError(`${explain} is empty`)

    if (string.includes(' ')) throw new FormatError(`${explain} has spaces`)
}

function validateStringNotEmptyOrBlank(string, explain = 'string') {
    validateString(string, explain)

    if (!string.length) throw new FormatError(`${explain} is empty`)

    if (!string.trim().length) throw new FormatError(`${explain} is blank`)
}

export { validateStringNotEmptyNoSpaces, validateStringNotEmptyOrBlank, validateNumber, validateString, validateJwt, validatePassword, isJwtValid, validateEmail} 