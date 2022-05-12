function saveNote(token, noteId, text, callback){

    const api= new Apicaller('https://b00tc4mp.herokuapp.com/api')

    api.get('/v2/users', 
    {headers: {'Authorization' : `Bearer ${token}`}}, (error, {status, payload}) =>{ //payload=todo lo que hay guardado en la api
        
        if (error) {
            callback (error)
            return
        }
        if (status === 200) {
            const data = JSON.parse(payload)
            const { notes = [] } = data // si no hay notas lo creo vacio

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
                api.patch('/v2/users',
                {headers : {'Authorization' : `Bearer ${token}`, 'Content-Type': 'application/json'}, body: JSON.stringify({notes})}, 
                (error, {status, payload}) => { 
                    if (error) {  // si hay un error definido
                        callback(error) // lo enviamos por callback
                        return
                    }
                    if (status === 204) { // 204 = todo ok pero no devuelve nada
                        callback(null)
                    } else if (status >= 400 && status < 500) {
                        
                        const data = JSON.parse(payload) //convierte de jason a JS

                        callback(new Error(data.error)) // para pasarle el error
                    } else callback(new Error('server error'))

                })
            }
    

        } else if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)
            
            callback(new Error(data.error))
        } else callback(new Error('server error'))        
    })
}



/*

function saveNote(token, noteId, text, callback) {

    // declaro un constructor de una peticion a servidor
    const xhr = new XMLHttpRequest



    xhr.addEventListener('load', event => {
        const status = event.target.status

        if (status === 200) {
            const json = event.target.responseText
            const data = JSON.parse(json)
            //const notes = data.notes
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
            }
            else {
                note = new Note(null, text)
                notes.push(note)
            }



            // dentro de la callback de peticion de notas
            // genero una subida e notas
            {
                const xhr = new XMLHttpRequest
    
                xhr.addEventListener('load', event => {
                    // me guardo es satatus del svent target
                    const status = event.target.status
                    
                    if (status === 204) // si es 204 correcto, sin respuesta
                        callback(null, note.id)
                    else if (status >= 400 && status < 500) { // 400-500 errores de cliente
                        const json = event.target.responseText // me guardo el texto de error
                        const data = JSON.parse(json) // lo convierto de jason a string
            
                        callback(new Error(data.error)) // lo envio como mensaje de error
                    } else {
                        callback(new Error('server error')) // sino sera un error de servidor
                    }
                })
    
                // abro la api en modpo POST
                xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    
                // le indico que le envio un jason
                xhr.setRequestHeader('Authorization', `Bearer ${token}`)
                xhr.setRequestHeader('Content-Type', 'application/json')
    
                const data = { notes } // cojo los datos que me llegan para el registro
                const json = JSON.stringify(data)   // lo convierto a jason
    
                xhr.send(json) // se los envio al xhr (el constructor que abro al principio)
            }





        }
        else if (status >= 400 && status < 500) {
            const json = event.target.responseText
            const data = JSON.parse(json)
            callback(new Error(data.error))
        } else
            callback(new Error('server error')) // si el error es un 500 no viene JASON ni nada
    })


    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}

*/