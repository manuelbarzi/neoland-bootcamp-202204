function saveNote(token, noteId, text, callback) {
    validateJWT(token)
    validateNoteId(noteId)
    validateString(text, 'text')
    
    const api = new Apium('http://b00tc4mp.herokuapp.com/api/v2')

    api.get(
        'users',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        },
        (error, { status, payload }) => {
            if (error) return callback(error)

            const data = JSON.parse(payload)

            if (status >= 400 && status < 500)
                callback(new Error(data.error))
            else if (status >= 500)
                callback(new Error('server error'))

            else if (status >= 200 && status < 300) {
                const username = data.username

                const { notes = [] } = data

                const indexNote = notes.findIndex(note => note.id === noteId)

                if (indexNote > -1) {
                    notes[indexNote].text = text

                } else {
                    const actualNote = { username, text, date: new Date, id: noteId }

                    notes.push(actualNote)

                    data.notes = notes
                }

                api.patch(
                    'users',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    },
                    (error, { status, payload }) => {
                        if (error) return callback(error)

                        if (status >= 400 && status < 500) {

                            const data = JSON.parse(payload)
                            
                            callback(new Error(data.error))

                        } else if (status >= 500)
                            callback(new Error('server error'))

                        else if (status >= 200 && status < 300)
                            callback(null)

                    }
                )
            }
        }
    )
}