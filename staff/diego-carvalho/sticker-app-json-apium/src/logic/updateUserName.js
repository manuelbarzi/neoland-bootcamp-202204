function updateUserName(token, newName, callback) {
    const logger = new Logger('updateUserName')

    logger.info('call')

    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', event => {
        logger.info('response')

        const status = event.target.status

        if (status === 204)
            callback(null)
        else if (status >= 400 && status < 500) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(new Error(data.error))
        } else callback(new Error('server error'))
    })

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')
    

    const data = { name: newName }

    const json = JSON.stringify(data)

    xhr.send(json)

    //logger.info('request')

}

