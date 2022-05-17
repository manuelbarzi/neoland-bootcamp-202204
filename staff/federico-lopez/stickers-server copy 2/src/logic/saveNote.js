function saveNote(token, noteId, text, callback) {
    const api = new Apiumz

    api.call(
        'GET',
        'http://b00tc4mp.herokuapp.com/api/v2/users',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        },
        (error, { status, payload }) => {
            const data = JSON.parse(payload)

            if (status >= 200 && status < 300) {
                const username = data.username

                const { notes = [] } = data

                const indexNote = notes.findIndex(note => note.id === noteId)

                if (indexNote > -1) {
                    notes[indexNote].text = text

                } else {
                    const actualNote = { username, text, date: new Date, id: noteId }

                    notes.push(actualNote)
                }

                api.call(
                    'PATCH',
                    'http://b00tc4mp.herokuapp.com/api/v2/users',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    },
                    (error, { status, payload }) => {

                        if (status >= 200 && status < 300) {
                            callback(null)

                        } else if (status >= 400 && status < 500) {
                            const json = event.target.responseText

                            const data = JSON.parse(json)
                            callback(new Error(data.error))

                        } else callback(new Error('server error'))
                    }
                )
            } else if (status >= 400 && status < 500) {
                callback(new Error(data.error))
            } else callback(new Error('server error'))
        }
    )
}