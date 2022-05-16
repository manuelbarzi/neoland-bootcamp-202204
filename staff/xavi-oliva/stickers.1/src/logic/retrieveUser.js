function retrieveUser(token, callback) {
    const logger = new Logger('retrieveUser')

    logger.info('call')

    validateJwt(token)

    const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    logger.info('request')

    api.get('v2/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }, (error, response) => {
        if (error) return callback(error)

        logger.info('response')

        const { status, payload } = response

        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else if (status >= 500)
            callback(new Error('server error'))
        else if (status === 200) {
            const data = JSON.parse(payload)

            const user = new User(data.name, data.username)

            callback(null, user)
        }
    })
}