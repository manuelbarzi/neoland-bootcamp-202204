// Apium 2
function registerUser(name, username, password, callback) {
    const logger = new Logger('registerUser')

    logger.info('call')

    const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    api.post('v2/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, username, password })

    }, (error, response) => {

        if (error) return callback(error)

        logger.info('response')

        const { status, payload } = response

        if (status === 201)
            callback(null)
        else if (status >= 400 && status < 500) {
            // const json = event.target.responseText

            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else callback(new Error('server error'))

    })
}