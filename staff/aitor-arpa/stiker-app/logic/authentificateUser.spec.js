describe('AuthentificateUser', () => {
    
    it('Usuario no correcto con base de datos', () => {
        db.users.length = 0 // limpiamos la base de datos

        authenticateUser('zepe', '123', function(error) {
            expect(error).toBeDefined
            expect(error.message).toBe('Wrong username or password')
        })
        db.users.length = 0
    })

//      --------------  HAPPY PAS  Cuando testeamos primero mejor empezar por el que va a ser el seguro
    it('Usuario encontrado en la base de datos', () => {
        db.users.length = 0
        
        db.users.push({  // le fuerzo el Usuario a la base de datos 
            name: 'zepe',
            username: 'zepe',
            password: '123'  
        })

        authenticateUser('zepe', '123', function(error) {
            expect(error).toBe(null)
        })
        db.users.length = 0
    })

})