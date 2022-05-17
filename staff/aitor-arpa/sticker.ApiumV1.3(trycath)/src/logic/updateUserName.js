function updateUserName(token, name, callback) {
    validateJwt(token) 
     

    const api = new Apium('https://b00tc4mp.herokuapp.com/api')
    
    api.patch('v2/users', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name }) // es lo que envio al servidor 
    }, (error, { status, payload }) => {
       if(status === 204) {
        
        callback(null, name)

    } else if (status >= 400 && status < 500) {
        const data = JSON.parse(payload)

        callback(new Error, data.name)

    } else {
        callback(new Error('server error'))
    }

})
}
