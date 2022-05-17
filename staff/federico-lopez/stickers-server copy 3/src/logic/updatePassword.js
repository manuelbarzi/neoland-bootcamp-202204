function updatePassword(token, oldPassword, password, callback) {
    const api = new Apium('http://b00tc4mp.herokuapp.com/api/v2')

    api.patch(
        'users',
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ oldPassword, password })
        },
        (error, { status, payload }) => {
            if (error) return callback(error)
            
            if (status >= 400 && status < 500) {
                const data = JSON.parse(payload)

                callback(new Error(data.error))
                
            } else if (status > 500) 
                callback(new Error('server error'))
            
            if (status >= 200 && status < 300)
                callback(null)
        }
    )
}