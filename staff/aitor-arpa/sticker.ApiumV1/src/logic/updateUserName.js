/* Creo funcion donde le pasare por parametros el nombre y el nuevo nombre recogidos por los input 
del formulario de UpdateUserName ( faltara 1 input en su componente).
Condiciones --> -Que el nombre sea diferente al Nuevo nombre 
                -Que el Nuevo nombre sea diferente a los introducidos en la base de datos (OPCIONAL) 
si todo se cumple igualo el nombre al nuevo nomber devuelvo null conforme todo va bien */
function updateUserName (name, callback)  {

    const api = new Apium

    logger.info('request')

    api.call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    }, (error, { status, payload }) => {
        logger.info('response')

        if (error) {
            callback(error)

            return
        }

        if (status === 200) {
            const data = JSON.parse(payload)

            callback(null, data.token)
        } else if (status >= 400 && status < 500) {
            logger.warn('response - client error status ' + status)

            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else {
            logger.error('response - server error status ' + status)

            callback(new Error('server error'))
        }
    })
}


