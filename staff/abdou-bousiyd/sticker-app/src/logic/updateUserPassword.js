function updateUserPassword(token, oldPassword, password, newPasswordRepeat, callback) {
// console.log(token, oldPassword, password, newPasswordRepeat, 588558585885)
        // validateJwt(token)
        // validatePassword(password)
        // validatePassword(newPassword, 'new password')
        // validatePassword(newPasswordRepeat, 'new password repeat')

        // if (newPassword !== newPasswordRepeat)
        //     throw new Error('new password and new password repeat are not the same')

    const api = new Apium
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users'

    api.call(
        'PATCH',
        url,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`  
        },
            body: JSON.stringify({ oldPassword, password })
        }, 
            (error, {status, payload}) => {
            if(error) return callback(error)
            if(status === 204) {
                callback(null)
            }else if (status >= 400 && status < 500) {
                const data = JSON.parse(payload)
                callback(new Error(data.error))
            } else callback(new Error('server error'))
    })
}


// function updateUserPassword(token, oldPassword, password, newPasswordRepeat, callback) {
//     const xhr = new XMLHttpRequest()
//     const url = 'https://b00tc4mp.herokuapp.com/api/v2/users'


//     xhr.addEventListener('load', event => {
//         const status = event.target.status
//         if(status === 204) {
//             const json = event.target.responseText
//             const data = JSON.parse(json)
//             callback(null, data.token)
//         }else if (status >= 400 && status < 500) {
//             const json = event.target.responseText
//             const data = JSON.parse(json)
//             callback(new Error(data.error))
//         } else callback(new Error('server error'))
//     })

//     xhr.open('PATCH', url)

//     xhr.setRequestHeader('Content-Type', 'application/json')
//     xhr.setRequestHeader('Authorization', `Bearer ${token}`)

//     const data = { oldPassword, password }
    
//     const json = JSON.stringify(data)
        
//     xhr.send(json)
// }

