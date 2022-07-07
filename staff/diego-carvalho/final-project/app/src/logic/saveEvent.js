import Logger from 'vendor/Loggy'
import Apium from 'vendor/Apium'
import { validateJwt } from 'validators'

function saveEvent(token, eventId, title, description, location, eventDate, callback) {
  const logger = new Logger('saveEvent')

  logger.info('call')

  validateJwt(token, 'token')

  logger.info('request')

  const api = new Apium('http://localhost:8080/api')

  if (!eventId)
    api.post('events', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, location, eventDate })
    }, (error, response) => {
      if (error) return callback(error)

      logger.info('response')

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
      body: JSON.stringify({ eventId, title, description, location, eventDate })
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

export default saveEvent