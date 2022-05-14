function registerUser(name, username, password, callback) {
    const logger = new Logger('registerUser')

    logger.info('call')

    validateString(name, 'name')
    validateString(username, 'username')
    validatePassword(password)

    logger.info('request')

    const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    api.post('v2/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, username, password })
    }, (error, { status, payload }) => {
        logger.info('response')

        if (error) {
            callback(error)

            return
        }

        if (status === 201) {
            callback(null)
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

