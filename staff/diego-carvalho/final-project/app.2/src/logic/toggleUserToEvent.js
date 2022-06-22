import Apium from 'vendor/Apium'
import { validateStringNotEmptyNoSpaces, validateJwt } from 'validators'
import Logger from 'vendor/Loggy'


function toggleUserToEvent(token, eventId) {
  const logger = new Logger('toggleUserToEvent')

  logger.info('call')

  validateJwt(token)
  validateStringNotEmptyNoSpaces(eventId, 'eventId')

  const api = new Apium('http://localhost:8080/api')

  api.patch(`events/${eventId}/participants`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }, (error, response) => {
    if (error) return callback(error)

    logger.info('response')

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

export default toggleUserToEvent
