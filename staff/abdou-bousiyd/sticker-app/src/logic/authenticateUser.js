function authenticateUser(username, password, callback) {
    
    const xhr = new XMLHttpRequest
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/auth'

    xhr.addEventListener('load', event => {
        const status = event.target.status

        if(status === 200) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(null, data.token)
        }else if (status >= 400 && status < 500) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(new Error(data.error))
        } else callback(new Error('server error'))
    })

    xhr.open('POST', url)

    xhr.setRequestHeader('Content-Type', 'application/json')

    const data = { username, password}

    const json = JSON.stringify(data)

    xhr.send(json)
}