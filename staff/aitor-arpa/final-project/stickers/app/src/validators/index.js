import  FormatError  from "../errors"
function validateString(string, explain = 'string') {
    if (typeof string !== 'string') throw new TypeError (`${explain} is not a string`)
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

// explain la palabra que saldra por el mensaje de Error ya que le pasaremos el parametro a la hora de llamar a la funcion
function validatePassword(password, explain = 'password') {
    validateString (password, explain) // al introducir nuestra funcion no hace falta pastar el if ya lo hace nuestra funcion
   // if ( typeof password !== 'string') throw new TypeError ('password is not a strig')
    if (password.length < 8)
        throw new FormatError (`${explain} length is lower than 8`)        

}

function validatename(name, explain = 'name'){
    validateString(name,explain)
    if (name.length < 0) throw new FormatError (`${explain} is empty`)
        
        const namefind = name.indexOf("/^([0-9])*$/")
        
        if (namefind.length >= 1 ) 
        throw new FormatError (`${explain} the name cannot contain symbols or spaces`)

}

export { validateJwt,validatePassword,validateString,validateStringNotEmptyNoSpaces,validateStringNotEmptyOrBlank,validatename}