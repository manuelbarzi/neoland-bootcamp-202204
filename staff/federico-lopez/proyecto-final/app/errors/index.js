import createCustomError from '../utils/createCustomError'

const FormatError = createCustomError('FormatError')
const AuthError = createCustomError('AuthError')
const ConflictError = createCustomError('ConflictError') 
const NotFoundError = createCustomError('NotFoundError')

export {
    FormatError,
    AuthError,
    ConflictError,
    NotFoundError
}