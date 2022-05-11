function updateUserPassword(token, password, newPassword, newPasswordRepeat, callback) {

    if (password === newPassword) {
        callback(new Error('current password and new password are the same'))

        return
    }

    if (newPassword !== newPasswordRepeat) {
        callback(new Error('new password and new password repeat are not the same'))

        return
    }

    
    
    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', event => {
        const status = event.target.status
        
        if (status === 204) 
            callback(null)
        else if (status >= 400 && status < 500) { 
            const json = event.target.responseText 
            const data = JSON.parse(json)

            callback(new Error(data.error)) 
        } else {
            callback(new Error('server error'))
        }
    })


    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')
    
    const data = { oldPassword: password, password: newPassword }
    const json = JSON.stringify(data) 

    xhr.send(json)

}