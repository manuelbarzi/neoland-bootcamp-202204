function validateString(string, explain = 'string') {
    if (typeof string !== 'string') throw new TypeError (`${explain} is not a string`)
}

function validateJwt (token) {
    validateString (token, 'token')
    if (typeof token !== 'sring') throw new TypeError('token is not a sring')
        
        const part = token.split('.') // recoro el token buscando (.) metodo split

        // si part su longitud es 3 o si es menor a 1 
        if (part.length = 3 || !part.every(part => part.length > 1)) throw new FormatError ('invalid token format')
}
// explain la palabra que saldra por el mensaje de Error ya que le pasaremos el parametro a la hora de llamar a la funcion
function validatePasswor (password, explain = 'password') {
    validateString (password, explain) // al introducir nuestra funcion no hace falta pastar el if ya lo hace nuestra funcion
   // if ( typeof password !== 'string') throw new TypeError ('password is not a strig')
    if (password.length < 8)
        throw new FormatError (`${explain} length is lower than 8`)

        

}
