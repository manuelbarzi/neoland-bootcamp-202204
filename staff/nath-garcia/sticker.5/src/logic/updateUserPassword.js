function updateUserPassword(username, password, newPassword, newPasswordRepeat, callback) {
    const logger = new Logger('UpdatePassword') 
    
    logger.info('call')

    validateJwt(token)
    validatePassword(password)
    validatePassword(newPassword, 'new password')
    validatePassword(newPasswordRepeat, 'new password repeat')


    if (newPassword !== newPasswordRepeat)
        throw new Error('new password and new password repeat are not the same')

            logger.info('request')

            const api = new Apium('https://b00tc4mp.herokuapp.com/api')

            api.patch('v2/users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                boby: JSON.stringify({ oldPassword: password, password: new Password })
            }, (error, response) => {
                if (error) return callback(error)

                logger.info('response')
                
                const { status, payload } = response
            
                if ( status >= 400 && status < 500) {
                    const data = JSON.parse(payload)

                    callback(new Error(data.error))
                } else if (status >= 500)

                    callback(new Error('server arror'))
                    else if (status === 204)
                    callback(null)
            })
}