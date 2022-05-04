 function retriveUser (username, callback) {
     const user = users.find( user => user.username === username) // (Esto esta mal como concepto, nose guarda un booleano) en la variable guardamos un true o false ¿? 
     if(!user) { // si es false ¿?
         callback(new Error ('${username} not found'))
         return

     }
/     callback(null,user)

 }