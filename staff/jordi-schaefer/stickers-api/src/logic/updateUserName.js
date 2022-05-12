function updateUserName (token, newName, callback)  {

    const api = new Apicaller('https://b00tc4mp.herokuapp.com/api')

    api.patch('/v2/users', {
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
        body: JSON.stringify({ name: newName })}, (error, {status, payload}) => {

            if (error) {
                callback(error)
                return
            }
            if (status === 204) 
                callback(null)
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