describe('AuthenticateUser', () => {

    it('Should succeed finding a user in data base', () => {
        users.length = 0
        
        users.push({  // le pongo un usuario
            name: 'zepe',
            username: 'zepe',
            password: '123'  
        })

        authenticateUser('zepe', '123', function(error) {
            expect(error).toBe(null)
        })
        users.length = 0
    })
    
    it('Should fail when password is incorrect', () => {
        users.length = 0 // limpiamos la base de datos

        users.push({  // le pongo un usuario
            name: 'zepe',
            username: 'zepe',
            password: '123'  
        })

        authenticateUser('zepe', '456', function(error) {
            expect(error).toBeDefined
            expect(error.message).toBe('Wrong username or password')
        })
        users.length = 0
    })

    it('Should fail when user is incorrect', () => {
        users.length = 0 // limpiamos la base de datos

        users.push({  // le pongo un usuario
            name: 'zepe',
            username: 'zepe',
            password: '123'  
        })

        authenticateUser('aitor', '123', function(error) {
            expect(error).toBeDefined
            expect(error.message).toBe('Wrong username or password')
        })
        users.length = 0
    })

    it('Should fail on non-existing user', () => {
        users.length = 0 // limpiamos la base de datos


        authenticateUser('aitor', '123', function(error) {
            expect(error).toBeDefined
            expect(error.message).toBe('Wrong username or password')
        })
        users.length = 0
    })

})