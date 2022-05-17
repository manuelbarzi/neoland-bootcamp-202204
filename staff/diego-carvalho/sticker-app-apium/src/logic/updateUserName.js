function updateUserName(token,newName, callback) {
    const logger = new Logger('updateUserName')

    logger.info('call')

    validateJwt(token)
    validateString(newName, 'newName')

    logger.info('request')

    const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    api.patch('v2/users', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newName })
    }, (error, response) => {
        if (error) return callback(error)

        logger.info('response')

        const { status, payload } = response

        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else if (status >= 500)
            callback(new Error('server error'))
        else if (status === 204)
            callback(null)
    })

}

