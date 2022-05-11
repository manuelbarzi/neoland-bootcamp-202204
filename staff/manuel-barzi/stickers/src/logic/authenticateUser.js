function authenticateUser(username, password, callback) {
    logger.info('authenticateUser - call')

    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', event => {
        logger.info('authenticateUser - response')

        //const { target: { status } } = event
        const status = event.target.status

        if (status === 200) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(null, data.token)
        } else if (status >= 400 && status < 500) {
            logger.warn('authenticateUser - response - client error status ' + status)

            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(new Error(data.error))
        } else {
            logger.error('authenticateUser - response - server error status ' + status)

            callback(new Error('server error'))
        }
    })

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const data = { name, username, password }

    const json = JSON.stringify(data)

    xhr.send(json)

    logger.info('authenticateUser - request')
}