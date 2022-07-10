const Logger = require('../vendor/Loggy')
const Apium = require('../vendor/Apium')
const { validateStringNotEmptyOrBlank, validateStringNotEmptyNoSpaces, validateUsername, validatePassword, validateEmail, validateUsername} = require('../validators')

function registerUser(name, surname, username, email, phone, password) {
    validateStringNotEmptyOrBlank(name, 'name')
    validateStringNotEmptyNoSpaces(surname, 'surname')
    validateUsername(username)
    validateEmail(email)
    validateStringNotEmptyOrBlank(phone)
    validatePassword(password)

    const logger = new Logger('registerUser')

    logger.info('call')


    const api = new Apium(process.env.REACT_APP_API_URL)

    logger.info('request')
    return api = post('users', {
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ name, surname, username, email, phone, password })
    })

    .then(({status, payload}) => {

        if (status===201) {
            return null
        } else if (status >= 400 && status < 500) {
            logger.warn('response - client error status ' + status)

            const data = JSON.parse(payload)

            throw new Error(data.error)
        } else { 
            logger.error('response - client error status ' + status)

            throw new Error('server error')
            
        }
    })

}

export default registerUser