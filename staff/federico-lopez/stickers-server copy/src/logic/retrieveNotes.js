function retrieveNotes(token, callback) {
    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', event => {
        const status = event.target.status

        const json = event.target.responseText

        const data = JSON.parse(json)

        if (status === 200) {
            if(data.notes)
                callback(null, data.notes)
            else callback(null, [])
            
        } else if (status >= 400 && status < 500) {
            callback(new Error(data.error))
        } else callback(new Error('server error'))
    })

    xhr.open('GET', 'http://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}