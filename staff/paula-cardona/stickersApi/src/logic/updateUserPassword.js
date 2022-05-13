//idea controlar los parametros de entrada para ahorrarme las entradas a api que seran infertiles. 
//tenemos que hacer validaciones
// necesitamos que todos los parametros sean

// friendly reminder (el try catch solo pilla errores sincronos,
// los erroes que se lanzen por api (validando el estatus),
// o sea en la response no se manejan así)

function updateUserPassword(token, password, newPassword, newPasswordRepeat, callback) {
    // Esto es una responsabilidad ( valida los parámetros de entrada [robusta])
    validateJwt(token)
    validatePassword(password, 'password')
    validatePassword(newPassword, 'newPassword')
    validatePassword(newPasswordRepeat, 'newPasswordRepeat' )

    if (password === newPassword) {
        // con custom errors
        throw new Error('new password and new password repeat are not the same')
        // failCallback()
    }

    if (newPassword !== newPasswordRepeat) {
        callback(new Error('new password and new password repeat are not the same'))

        return
    }
    // esto es una responsabilidad ( llama a la api y maneja erroes asíncronos)
    const api = new Apium ('https://b00tc4mp.herokuapp.com/api')

    api.patch('v2/users', {
        headers : { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'  }, 
        body: JSON.stringify({ oldPassword: password, password: newPassword })}, //la api te pide algo que se llama oldpassword a su propiedad password, y password a su propiedad newpassword
        (error, { status, payload}) => {

            if (error) {
                // estos erroes de aquí no salndrán por try catch, entoncs usamos callback
                callback(error)
                return
            }
            
            if (status >=400 && status < 500) { 

                const data = JSON.parse(payload) //la respuesta de data de json lo convierto en objeto

                callback(new Error(data.error)) //la propiedad de error de ese data
            
            }else if (status >= 500) 
                callback(new Error('server error')) 

            else if (status ===204) //todo bien sin respuesta, no hemos pedido nada a la API, solo enviado
                callback(null)
    })
}

