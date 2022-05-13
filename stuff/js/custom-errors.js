function createCustomError(name) {
    const customError = class extends Error {
        constructor(message) {
            super(message)
        }
    }

    customError.prototype.name = name

    return customError
}

// demo

const FormatError = createCustomError('FormatError')
const AuthError = createCustomError('AuthError')

const fe = new FormatError('invalid token')
console.log(fe)

const ae = new AuthError('wrong credentials')
console.log(ae)
// VM1255:19 FormatError: invalid token
//     at <anonymous>:18:12
// VM1255:22 AuthError: wrong credentials
//     at <anonymous>:21:12
