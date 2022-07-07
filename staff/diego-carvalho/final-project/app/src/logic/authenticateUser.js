import Logger from 'vendor/Loggy'
import { validateEmail, validatePassword } from 'validators'
import Apium from 'vendor/Apium'

function authenticateUser(email, password, callback) {
  const logger = new Logger('authenticateUser')

  logger.info('call')

  validateEmail(email)
  validatePassword(password)

  const api = new Apium('http://localhost:8080/api')

  logger.info('request')

  return api.post('users/auth', {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(({ status, payload }) => {
      logger.info('response')

      if (status === 200) {
        const data = JSON.parse(payload)

        return data.token
      } else if (status >= 400 && status < 500) {
        logger.warn('response - client error status ' + status)

        const data = JSON.parse(payload)

        callback(new Error(data.error))
      } else {
        logger.error('response - server error status ' + status)

        callback(new Error('server error'))
      }
    })

}

export default authenticateUser

