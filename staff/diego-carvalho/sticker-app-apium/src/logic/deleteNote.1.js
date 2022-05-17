function deleteNote(token, noteId, callback) {
    const logger = new Logger('deleteNote')

    logger.info('call')

    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', event => {
        logger.info('response')

        const status = event.target.status
        
        if (status === 200){
            const json = event.target.responseText
            const data = JSON.parse(json) 
            
            const {notes = []} = data 

            if(noteId){
                const index = notes.findIndex(note => note.id === noteId)
                notes.splice(index, 1)

                {
                    const xhr = new XMLHttpRequest

                    xhr.addEventListener('load', event => {
                        const status = event.target.status

                        if(status === 204){
                            callback(null)
                        }else if (status >= 400 && status < 500) { 
                            const json = event.target.responseText 
                            
                            const data = JSON.parse(json) 
                
                            callback(new Error(data.error)) 
                            }   else callback(new Error('server error')) 
                        
                    })
                    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

                    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
                    xhr.setRequestHeader('Content-Type', 'application/json')

                    const data = {notes} 

                    const json = JSON.stringify(data)

                    xhr.send(json) 
        
                }
            }
            }else if (status >= 400 && status < 500) { 
            const json = event.target.responseText 
            
            const data = JSON.parse(json) 

            callback(new Error(data.error)) 
            }   else callback(new Error('server error')) 
        
    })
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        
    xhr.send() 

    logger.info('request')
    
}