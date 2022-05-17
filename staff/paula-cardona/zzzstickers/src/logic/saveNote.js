//2 llamadas
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

                xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users') //devuelve una parte

                xhr.setRequestHeader('Authorization', `Bearer ${token}`)
                xhr.setRequestHeader('Content-Type', 'application/json')

                const data = { notes }  //de lo que me devuelve la api me quedo con notes

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

// Qué le paso por parámetros
// En la callback que le paso por parámetros a esa callback


// primero tengo que llamar a v:get p:/users
// manejo errores de la llamada
// paso el json de la respuesta a a obj
// cojo la propiedad notes y le puseo la nota nueva
// hago otra llamada a p:/users con verbo patch
// a esta llamada solo le paso como body la note con el array con lo que había más la nueva
// manejo los errores


