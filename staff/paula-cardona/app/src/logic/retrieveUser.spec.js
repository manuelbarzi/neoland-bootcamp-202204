describe('retrieveUser', function () {
    it('should return the name of the user', function() {

        users.length = 0  // vacio memoria al principio y al final

        users.push({      // le pongo un usuario nuevo
            name: 'paula',
            username: 'cardona',
            password: '123123123'  
        })

        retrieveUser('cardona', function(error, usuario) {
            expect(error).toBe(null)
            expect(usuario.username).toBe('cardona')
        })

        users.length = 0
    })


    it('should not found the username', function () {
        users.length = 0  
        users.push({      
            name: 'paula',
            username: 'perez',
            password: '123123123'  
        })

        retrieveUser('cardona', function(error, usuario) {
            expect(error).toBeDefined()
            expect(error.message).toBe('user with username cardona not found')
        })

        users.length = 0
    })

})