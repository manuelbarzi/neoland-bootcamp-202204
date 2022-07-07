import Logger from 'vendor/Loggy'
import Apium from 'vendor/Apium'
import { validateJwt, validateStringNotEmptyNoSpaces } from 'validators'

function signUpToEvent(token, eventId, callback) {
  const logger = new Logger('saveEvent')

  logger.info('call')

  validateJwt(token, 'token')
  validateStringNotEmptyNoSpaces(eventId, 'eventId')

  logger.info('request')

  const api = new Apium('http://localhost:8080/api')

  if (eventId)
    api.post(`/users/${eventId}`, {
      headers: {
        Authorization: `Bearer ${token}`
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
      else if (status === 200) {
        callback(null)
      }
    })
}
export default signUpToEvent