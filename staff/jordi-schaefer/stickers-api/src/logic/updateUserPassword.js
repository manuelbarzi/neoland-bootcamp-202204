function updateUserPassword(token, password, newPassword, newPasswordRepeat, callback) {

    if (password === newPassword) {
        callback(new Error('current password and new password are the same'))
        return
    }

    if (newPassword !== newPasswordRepeat) {
        callback(new Error('new password and new password repeat are not the same'))
        return
    }

    const api = new Apicaller('https://b00tc4mp.herokuapp.com/api')

    api.patch('/v2/users', {
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
        body: JSON.stringify({ oldPassword: password, password: newPassword })}, (error, {status, payload}) => {

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