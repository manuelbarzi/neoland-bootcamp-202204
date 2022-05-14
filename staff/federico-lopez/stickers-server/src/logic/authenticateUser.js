function authenticateUser(username, password, callback) {
    validateString(username, 'username')
    validatePassword(password, 'password')
    
    const api = new Apium('http://b00tc4mp.herokuapp.com/api/v2')

    api.post(
        'users/auth',
        {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        },
        (error, { status, payload }) => {
            if (error) return callback(error)

            const data = JSON.parse(payload)

            if (status >= 400 && status < 500) 
                callback(new Error(data.error))

            else if (status >= 500)
                callback(new Error('server error'))

            else if (status === 200)
                callback(null, data.token)
        }
    )
}