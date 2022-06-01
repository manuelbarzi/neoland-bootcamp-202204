function validateString(string, explain = 'string') {
    if (typeof string !== 'string') throw new TypeError(`${explain} is not a string`)
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