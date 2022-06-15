import Apium from 'vendor/Apium'
import { validateJwt } from 'validators'

function retrieveUser(token, callback) {
    validateJwt(token)

    const api = new Apium('http://localhost:8080/api')

    return api.get('users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }, (error, response) => {
        if (error) return callback(error)

        const { status, payload } = response

        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else if (status >= 500)
            callback(new Error('server error'))
        else if (status === 200) {
            const data = JSON.parse(payload)

            callback(null, data)
        }
    })
}

export default retrieveUser