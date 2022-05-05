 function authenticateUser ( username , password, callback) {

     const matches = users.some(function (user) { // Declaro variable para pasarle los elementos recogidos y comprobar si esnta en mi BD de Memoria
       return user.username === username && user.password === password
     })
     if(!matches){ // ! significa la negacion de  matches
         callback(new Error('Wrong username or password'))

         return
     }

     callback(null)
}
