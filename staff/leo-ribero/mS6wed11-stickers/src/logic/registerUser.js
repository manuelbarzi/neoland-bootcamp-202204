function registerUser(name, username, password, callback) {
    const logger = new Logger('registerUser')

    logger.info('call')

    const api = new Apium

    api.call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users', {

        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, username, password })
    }, (error, { status, payload }) => {
        debugger

        logger.info('response')

        if (status === 201)
            callback(null)
        else if (status >= 400 && status < 500) {

            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else callback(new Error('server error'))
    })
}