function saveNote(token, noteId, text, callback) { //version de Manu
    const logger = new Logger('saveNote')

    logger.info('call')

    // TODO validate input args

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


    /*function saveNote(token, noteId, text, callback){
        const api= new Apium //creo una constante que sera la nueva Apium
        api.call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', 
        {headers: {'Authorization' : `Bearer ${token}`}}, (error, {status, payload}) =>{ //payload=todo lo que hay guardado en la api
            debugger
            if (error) {
                callback (error)
                return
            }
            if (status === 200) {
                const data = JSON.parse(payload)
                const notes = data.notes
    
                let note
                if (noteId) {
                    note = notes.find(note => note.id === noteId) // guardo la nota que tiene ese id, si existe
    
                    if (note) // si ha encontrado alguna
                        note.text = text // le paso el nuevo texto
                    else { // si no hay ninguna nota
                        note = new Note(noteId, text) // creo una nueva
                        notes.push(note) // y se la pongo a todas las notas
                    }
                }
                else { // si no llega ningun id
                    note = new Note(null, text) // creo una nota nueva con un nuevo id
                    notes.push(note) 
                }
    
    
                { 
                    const api2 = new Apium
                    api2.call('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                    {headers : {'Authorization' : `Bearer ${token}`, 'Content-Type': 'application/json'}, body: JSON.stringify({notes})}, 
                    (error, {status, payload}) => { 
                        if (error) {  // si hay un error definido
                            callback(error) // lo enviamos por callback
                            return
                        }
                        if (status === 204) { //todo ok pero no devuelve nada
                            callback(null, note.id)
                        } else if (status >= 400 && status < 500) {
                            
                            const data = JSON.parse(payload) //convierte de jason a JS
    
                            callback(new Error(data.error)) // para pasarle el error
                        } else callback(new Error('server error'))
    
                    })
                }
                
                callback(null)
    
            } else if (status >= 400 && status < 500) {
                
                const data = JSON.parse(payload)
                
                callback(new Error(data.error))
            } else callback(new Error('server error'))
            
    
        })
    }*/
