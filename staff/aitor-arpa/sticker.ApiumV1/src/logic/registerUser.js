function registerUser(name, username, password, callback) {
  const logger = new Logger('registerUser')

  const api = new Apium

  logger.info('request')

  api.call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth', {
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, username, password })
  }, (error, { status, payload }) => {
      logger.info('response')

      if (error) {
          callback(error)

          return
      }

      if (status === 200) {
          const data = JSON.parse(payload)

          callback(null, data.token)
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

/*   const  = new XMLHttpRequest

  xhr.addEventListener('load', event => {
      //const { target: { status } } = event
      const status = event.target.status

      if (status === 201)
          callback(null)
      else if (status >= 400 && status < 500) {
          const json = event.target.responseText
xhr
          const data = JSON.parse(json)

          callback(new Error(data.error))
      } else callback(new Error('server error'))
  })

  xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

  xhr.setRequestHeader('Content-Type', 'application/json')

  const data = { name, username, password }

  const json = JSON.stringify(data)

  xhr.send(json)
} */