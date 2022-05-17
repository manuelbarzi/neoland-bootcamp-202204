function retrieveNotes(token, callback) {

    const api = new Apium
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users'

    api.call('GET', url, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ token })
    }, (error, {status, payload}) => {
        if(error) return callback(error)
        if(status === 200) {
            const data = JSON.parse(payload)
            const {notes = []} = data
            callback(null, notes)
        }else if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else {
            callback(new Error('server error'))
        }
    })
}


// function retrieveNotes(token, callback) {
//     const xhr = new XMLHttpRequest
//     const url = 'https://b00tc4mp.herokuapp.com/api/v2/users'
    
//     xhr.addEventListener('load', event => {
//         const status = event.target.status 

//         if(status === 200) {
//             const json = event.target.responseText
//             const data = JSON.parse(json)
//             callback(null, data.notes)
//         }else if(status >= 400 && status < 500) {
//             const json = event.target.responseText
//             const data = JSON.parse(json)
//             callback(new Error(data.error))
//         }
//     })

//     xhr.open('GET', url)
//     xhr.setRequestHeader('Authorization', `Bearer ${token}`)
//     xhr.send()
// }

