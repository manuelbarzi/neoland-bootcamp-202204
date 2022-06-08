const createCustomError = require('../../../stickers/api/src/utils/createCustomError')

const FormatError = createCustomError('FormatError')
const AuthError = createCustomError('AuthError')
const ConflictError = createCustomError('ConflictError')
const NotFoundError = createCustomError('NotFoundError')

module.exports = {
    FormatError,
    AuthError,
    ConflictError,
    NotFoundError
}