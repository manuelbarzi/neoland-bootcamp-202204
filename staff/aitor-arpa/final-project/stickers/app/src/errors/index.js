// Capa de Errores interna
import createCustomError from "../utils/createCustomErrors"
const FormatError = createCustomError ('FormatError') // Error de Formato
const AuthError = createCustomError ('AuthError') // Error de Autentificacion

export {
    FormatError,
    AuthError
}

export default { FormatError, AuthError }