function retrieveUser(token, callback) {
    
    validateJwt(token)

    const api = new Apicaller('https://b00tc4mp.herokuapp.com/api')

    api.get('/v2/users', {
        headers: { 'Authorization': `Bearer ${token}`}}, (error, {status, payload}) => {

            if (error) {
                callback(error)
                return
            }
            if (status === 200) {
                const data = JSON.parse(payload)
                const user = { name: data.name, username: data.username }
                callback(null, user)
            } 
            else if (status >= 400 && status < 500) { 
                const data = JSON.parse(payload)
                callback(new Error(data.error)) 
            } 
            else {
                callback(new Error('server error'))
            }
        }
    )
}