function retrieveNotes(token, callback) {
     const api = new Apium


    api.call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
        
    }, (error, { status, payload }) => {
       

        if (error) {
            callback(error)

            return
        }

        if (status === 200) {
            const data = JSON.parse(payload)

            callback(null, data.notes) // indicamos lo que devuelve
        } else if (status >= 400 && status < 500) {
           

            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else {
            

            callback(new Error('server error'))
        }
    })   
} 
  /*   const logger = new Logger('retrieveNotes')

    logger.info('call')
    
    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', event => {
        logger.info('response')

        //const { target: { status } } = event
        const status = event.target.status

        if (status === 200) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(null, data.notes )
        } else if (status >= 400 && status < 500) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(new Error(data.error))
        } else callback(new Error('server error'))
    })

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()

    logger.info('request')
} */