import { FormatError, AuthError } from '../errors/index'

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


export { validateString, validateJwt, validatePassword, isJwtValid} 