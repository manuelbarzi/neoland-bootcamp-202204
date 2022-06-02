function retrieveNotes(token, callback) {  // recuperar
    
    const api = new Apium // declaro el Constructor
    // Llamada al servidor con el merodo
    api.call('GET','https://b00tc4mp.herokuapp.com/api/v2/users/auth',{
        headers: {
            'Authorization':`Bearer ${token}` // tipo de header qeu envio
        },
       
// ------  COMPROVACION DE LA RESPUESTA -----
    },(error, { status, payload })=>{
        if(error){
            callback(error)

            return
        }
        if (status === 200){
            const data = JSON.parse(payload)

            callback(null, data.token)
        }else if (status >= 400 && status < 500){

            const data = JSON.parse(payload)
            callback(new Error(data.error))
        } else {

            callback(new Error('server erros'))
        }

        
    })
}
