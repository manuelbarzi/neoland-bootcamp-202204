function retrieveUser(token, callback) {
    validateJWT(token)

    const api = new Apium('http://b00tc4mp.herokuapp.com/api/v2')

    api.get(
        'users',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        },
        (error, { status, payload }) => {
            const data = JSON.parse(payload)
            
            if (status >= 400 && status < 500) 
                callback(new Error(data.error))
            else if (status >= 500)
                callback(new Error('server error'))
            else if (status === 200)
                callback(null, new User(data.name, data.username))
        }
    )
}