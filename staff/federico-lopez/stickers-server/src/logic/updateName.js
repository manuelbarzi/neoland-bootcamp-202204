function updateName(token, newName, callback) {
    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', event => {
        debugger
        const status = event.target.status

        if (status >= 200 && status < 300) {
            callback(null)
        } else if (status >= 400 && status < 500) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(new Error(data.error))

        } else {
            const json = event.target.responseText

            const data = JSON.parse(json)
            callback(new Error('server error'))
        }
    })

    xhr.open('PATCH', 'http://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const data = { name: newName }

    const json = JSON.stringify(data)
    debugger
    xhr.send(json)
}