// aqui guardo mis funciones para validar cosas

// comprobamos si los parametros que le enviamos a la funcion son string
function validateString(string, explain = 'string') { //string sera el elemento que queramos validar i explain es la palabra que define el string que pasamos
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

//comprobamos el token
function validateJwt(token) { // nos llega el token
    validateString(token, 'token') //validan si el token es un string usando la funcion de arriba.

    const parts = token.split('.') //corta el token en sus partes

    if (parts.length !== 3 || !parts.every(part => part.length > 0)) throw new FormatError('invalid token format')
}

// TRUE si todo cumplen
// FALSE si alguno no cumpe

// (!FALSE) //si se cumple lo del parentesis
// envie ERROR

function validatePassword(password, explain = 'password') {
    validateString(password, explain)

    if (password.length < 8) //si la longitud de la password es menor a 8 envia error
        throw new FormatError(`${explain} length is lower than 8`)
}   

function validateUsername(username) {
    validateStringNotEmptyNoSpaces(username, 'username')

    if (username.length < 4)
        throw new FormatError('username length is lower than 4')
}