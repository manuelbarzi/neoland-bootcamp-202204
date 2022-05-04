 function retriveUser (username, callback) {
    const user = users.find( user => user.username === username) // (Esto esta mal como concepto, nose guarda un booleano) en la variable guardamos un true o false ¿? 
    if(!user) { // si es false ¿? que no coincide entra si no devuelve error nullo (callback)
         callback(new Error ('${username} not found'))

       return

     
    }
    
    const copy = User.copyFrom(user)
    
    delete copy.password
    

    callback(null, copy)
}

