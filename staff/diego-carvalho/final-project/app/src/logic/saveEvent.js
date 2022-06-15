import Apium from 'vendor/Apium'
import { validateJwt } from 'validators'

function saveEvent(token, eventId, photo, title, description, direction, category, callback) {
    validateJwt(token, 'token')

    const api = new Apium('http://localhost:8080/api')

    if (!eventId)
        api.post('events', {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ photo, title, description, direction, category })
        }, (error, response) => {
            if (error) return callback(error)

            const { status, payload } = response

            if (status >= 400 && status < 500) {
                const data = JSON.parse(payload)

                callback(new Error(data.error))
            } else if (status >= 500)
                callback(new Error('server error'))
            else if (status === 201) {
                callback(null)
            }
        })
    else
        api.patch(`events/${eventId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ eventId, photo, title, description, direction })
        }, (error, response) => {
            if (error) return callback(error)

            const { status, payload } = response

            if (status >= 400 && status < 500) {
                const data = JSON.parse(payload)

                callback(new Error(data.error))
            } else if (status >= 500)
                callback(new Error('server error'))
            else if (status === 204) {
                callback(null)
            }
        })
}

export default saveEvent