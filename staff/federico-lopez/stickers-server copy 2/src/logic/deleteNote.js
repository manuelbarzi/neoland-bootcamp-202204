function deleteNote(token, noteId, callback) {
    const api = new Apium

    api.call(
        'GET',
        'http://b00tc4mp.herokuapp.com/api/v2/users',
        {
            headers: { Authorization: `Bearer ${token}` }
        },
        (error, { status, payload }) => {    
            const data = JSON.parse(payload)
            
            if (status >= 200 && status < 300) {                
                const notes = data.notes

                const indexNote = notes.findIndex(note => note.id === noteId)

                notes.splice(indexNote, 1)

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
                            const data = JSON.parse(payload)
                        
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