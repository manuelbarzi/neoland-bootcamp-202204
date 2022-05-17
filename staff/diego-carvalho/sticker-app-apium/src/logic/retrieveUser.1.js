function retrieveUser(token, callback) {
    const logger = new Logger('retrieveUser')

    logger.info('call')

    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', event => {
        logger.info('response')
        
        const status = event.target.status

        if(status === 200){
            const json = event.target.responseText

            const data = JSON.parse(json)

            const user = { name: data.name, username: data.username }

            callback(null, user)
        } else if (status >= 400 && status < 500){
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(new Error(data.error))
        } else callback(new Error('serve error'))
    })

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()

    logger.info('request')
}