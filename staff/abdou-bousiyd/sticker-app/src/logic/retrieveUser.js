function retrieveUser(token, callback) {
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
            const user = { name: data.name, username: data.username }
            callback(null, user)
        }else if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)
            callback(new Error(data.error))
        } else {
            callback(new Error('server error'))
        }
    })
}

// function retrieveUser(token, callback) {
//     const xhr = new XMLHttpRequest

//     xhr.addEventListener('load', event => {
//         //const { target: { status } } = event
//         const status = event.target.status

//         if (status === 200) {
//             const json = event.target.responseText

//             const data = JSON.parse(json)

//             const user = { name: data.name, username: data.username }

//             callback(null, user)
//         } else if (status >= 400 && status < 500) {
//             const json = event.target.responseText

//             const data = JSON.parse(json)

//             callback(new Error(data.error))
//         } else callback(new Error('server error'))
//     })

//     xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

//     xhr.setRequestHeader('Authorization', `Bearer ${token}`)

//     xhr.send()
// }

