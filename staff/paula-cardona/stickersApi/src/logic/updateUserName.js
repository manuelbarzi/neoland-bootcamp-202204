
function updateUserName(token, name, newName, callback) {

    // validateJwt(token)
    // validateString(name, 'name')
    // validateString(newName, 'newName')


    const logger = new Logger('updateUserName')

    
    
    if (name === newName) {
        callback(new Error('current name and new name are the same'))
        return
    }


    logger.info('call')
    const api = new Apium ('https://b00tc4mp.herokuapp.com/api')

    logger.info('request')
    api.post('/v2/users', {
        headers : { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'  }, 
        body: JSON.stringify({ name: newName })}, //para cambiar name necesitamos la propiedad de name que sera el NEWNAME
        (error, { status, payload}) => {

            if (error) {
                callback(error)
                return
            }
            logger.info('response')

            if (status >=400 && status < 500) { 

                const data = JSON.parse(payload) //la respuesta de data de json lo convierto en objeto

                callback(new Error(data.error)) //la propiedad de error de ese data
            
            }else if (status >= 500) 
                callback(new Error('server error')) //tenemos que especificar cuando es error ya que esto estaba abajo con else para coger el resto, pero al subirlo sino incluiria el else final

            else if (status ===204) //si el status es 201 no hanrá error, esta bien porque habrá creado el registerUser
                callback(null)
    })
}


