/*
function FormatError(message) {
    Error.call(this)

    this.message = message

    if (Error.captureStackTrace)
        Error.captureStackTrace(this, FormatError)
}

FormatError.prototype = Object.create(Error.prototype)
FormatError.prototype.constructor = FormatError
FormatError.prototype.name = FormatError.name
*/

class FormatError extends Error {
    constructor(message) {
        super(message)
    }
}

FormatError.prototype.name = FormatError.name

// demo

var fe = new FormatError('invalid token')

console.log(fe)