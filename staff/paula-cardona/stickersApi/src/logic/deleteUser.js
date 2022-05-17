function deleteUser (token, password, callback)  {

    validateJwt(token)
    validatePassword(password, 'password')

    const logger = new Logger('delete user')

    logger.info('call')
    const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    logger.info('request')
    api.delete('/v2/users', {
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
        body: JSON.stringify({ password})}, (error, {status, payload}) => {

            if (error) {
                callback(error)
                return
            }

            logger.info('response')
            if (status === 204) 
                callback(null)
            else if (status >= 400 && status < 500) { 
                const data = JSON.parse(payload)
                callback(new Error(data.error)) 
            } 
            else {
                callback(new Error('server error'))
            }
        }
    )
}

