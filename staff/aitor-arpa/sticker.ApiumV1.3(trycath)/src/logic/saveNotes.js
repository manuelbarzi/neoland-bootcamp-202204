
function saveNote(token, noteId, text, callback) {
    const logger = new Logger('saveNote')

    logger.info('call')

    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', event => {
        logger.info('response')

        //const { target: { status } } = event
        const status = event.target.status

        if (status === 200) {
            const json = event.target.responseText

            const data = JSON.parse(json)

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

            {
                const xhr = new XMLHttpRequest

                xhr.addEventListener('load', event => {
                    logger.info('response')

                    //const { target: { status } } = event
                    const status = event.target.status

                    if (status === 204) {
                        callback(null, note.id)
                    } else if (status >= 400 && status < 500) {
                        const json = event.target.responseText

                        const data = JSON.parse(json)

                        callback(new Error(data.error))
                    } else callback(new Error('server error'))
                })

                xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

                xhr.setRequestHeader('Authorization', `Bearer ${token}`)
                xhr.setRequestHeader('Content-Type', 'application/json')

                const data = { notes }

                const json = JSON.stringify(data)

                xhr.send(json)

                logger.info('request')
            }
        } else if (status >= 400 && status < 500) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(new Error(data.error))
        } else callback(new Error('server error'))
    })

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()

    logger.info('request')
}