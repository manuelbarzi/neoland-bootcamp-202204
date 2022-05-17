// Qué le paso por parámetros
// En la callback que le paso por parámetros a esa callback


// primero tengo que llamar a v:get p:/users
// manejo errores de la llamada
// paso el json de la respuesta a a obj
// cojo la propiedad notes y le puseo la nota nueva
// hago otra llamada a p:/users con verbo patch
// a esta llamada solo le paso como body la note con el array con lo que había más la nueva
// manejo los errores


import Logger from '../vendor/Loggy'
import {validateJwt} from '../validators'
import Apium from '../vendor/Apium'
import Note from '../data/models/Note'


function saveNote(token, noteId, text, callback){

    validateJwt(token) // envia throw error

    const logger = new Logger('save notes')
    logger.info('call')
    const api= new Apium //creo una constante que sera la nueva Apium

    logger.info('request')
    api.call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', 
    {headers: {'Authorization' : `Bearer ${token}`}}, (error, {status, payload}) =>{ //payload=todo lo que hay guardado en la api
       
        if (error) {
            callback (error)
            return
        } logger.info('response')
    
        if (status === 200) {
            const data = JSON.parse(payload)
            const { notes = []} = data

            let note
            if (noteId) {
                note = notes.find(note => note.id === noteId) // guardo la nota que tiene ese id, si existe

                //const guardoAqui = notes.find(cadaElemento => cadaElemento.id === noteId)


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
                logger.info('request')
                api2.call('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                {headers : {'Authorization' : `Bearer ${token}`, 'Content-Type': 'application/json'}, body: JSON.stringify({notes})}, 
                (error, {status, payload}) => {  //le enviamos authoriztion porque como queremos cambiar algo, tenemos que pedir permiso
                    if (error) {  // si hay un error de connexion de red
                        callback(error) // lo enviamos por callback
                        return
                    } logger.info('response')

                    if (status === 204) { //todo ok pero no devuelve nada
                        callback(null, note.id)
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

export default saveNote