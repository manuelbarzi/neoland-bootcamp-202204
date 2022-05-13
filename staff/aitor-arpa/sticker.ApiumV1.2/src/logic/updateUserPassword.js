function updateUserPassword(token, password, newPassword, newPasswordRepeat, callback) {
            // Validacion de datos
        // que el token sea de tipo string
       /*  if (typeof token !== 'sring') */

        const api = new Apium('https://b00tc4mp.herokuapp.com/api')
        
        api.patch('v2/users', {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ oldPassword: newPassword, password: password }) // es lo que envio al servidor 
        }, (error, response) => {
            if (error) return callback(error)

            const { status, payload } = response           
    
          if (status >= 400 && status < 500) {
              const data = Json.parse(payload)
          
            callback(new Error, data.error)
    
        } else if ( status >= 500)
            callback(new Error('server error'))
          else  if(status === 204) { // con el 204 no hay response asi que los callback no hay que poner el body 
                // payload es la response de servidor 
       
               callback(null) // Falta Implementar el toast de Verrificacion
          }  
    
    })
}