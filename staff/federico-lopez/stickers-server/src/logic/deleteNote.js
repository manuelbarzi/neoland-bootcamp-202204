function deleteNote(token, noteId, callback) {
    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', event => {
        const status = event.target.status

        const json = event.target.responseText

        const data = JSON.parse(json)

        if (status >= 200 && status < 300) {
            const otherXhr = new XMLHttpRequest

            otherXhr.addEventListener('load', event => {
                const status = event.target.status

                if (status >= 200 && status < 300) {
                    callback(null)

                } else if (status >= 400 && status < 500) {
                    const json = event.target.responseText

                    const data = JSON.parse(json)
                    callback(new Error(data.error))

                } else callback(new Error('server error'))
            })

            otherXhr.open('PATCH', 'http://b00tc4mp.herokuapp.com/api/v2/users')

            otherXhr.setRequestHeader('Authorization', `Bearer ${token}`)

            otherXhr.setRequestHeader('Content-Type', 'application/json')

            const notes = data.notes

            const indexNote = notes.findIndex(note => note.id === noteId)

            notes.splice(indexNote, 1)

            data.notes = notes

            const actualJson = JSON.stringify(data)

            otherXhr.send(actualJson)

        } else if (status >= 400 && status < 500) {
            callback(new Error(data.error))
        } else callback(new Error('server error'))
    })

    xhr.open('GET', 'http://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}