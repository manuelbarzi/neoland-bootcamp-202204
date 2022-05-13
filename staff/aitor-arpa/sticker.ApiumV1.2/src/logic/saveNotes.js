
function saveNote(token, noteId, text, callback) {
    const logger = new Logger('saveNote')

    logger.info('call')

    const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    logger.info('request')

    api.get('v2/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }, (error, response) => {
        // if (error) {
        //     callback(error)

        //     return
        // }
        if (error) return callback(error)

        logger.info('response')

        const { status, payload } = response

        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else if (status >= 500)
            callback(new Error('server error'))
        else if (status === 200) {
            const data = JSON.parse(payload)

            const { notes = [] } = data

            let note

            if (noteId) {
                note = notes.find(note => note.id === noteId)

                if (note)
                    note.text = text
                else {
                    note = new Note(noteId, text)

                    notes.push(note)
                }
            } else {
                note = new Note(null, text)

                notes.push(note)
            }

            logger.info('request')

            api.patch('v2/users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ notes })
            }, (error, response) => {
                if (error) return callback(error)

                logger.info('response')

                const { status, payload } = response

                if (status >= 400 && status < 500) {
                    const data = JSON.parse(payload)
        
                    callback(new Error(data.error))
                } else if (status >= 500)
                    callback(new Error('server error'))
                else if (status === 204) {
                    callback(null)
                }
            })
        }
    })
}