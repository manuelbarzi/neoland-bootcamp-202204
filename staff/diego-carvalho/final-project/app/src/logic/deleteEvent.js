import Apium from 'vendor/Apium'
import { validateJwt, validateStringNotEmptyNoSpaces } from 'validators'

export function deleteEvent(token, eventId, callback) {
    validateJwt(token)
    validateStringNotEmptyNoSpaces(eventId, 'eventId')

    const api = new Apium('http://localhost:8080/api')

    api.delete(`events/${eventId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
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