import Logger from '../vendor/Loggy'

function registerUser(name, username, password, callback) {
    const logger = new Logger('registerUser')

    logger.info('call')

    const xhr = new XMLHttpRequest()

    xhr.addEventListener('load', event => {
        const status = event.target.status

        if (status === 201)
            callback(null)
        else if (status >= 400 && status < 500) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(new Error(data.error))
        } else callback(new Error('server error'))
    })

    xhr.open('POST', 'http://localhost:8080/api/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const data = { name, username, password }

    const json = JSON.stringify(data)

    xhr.send(json)
}

export default registerUser