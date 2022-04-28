describe('retrieveUser', function () {
    it('should return the name of the user', function() {

        users.length = 0  // vacio memoria

        users.push({      // le pongo un usuario
            name: 'zepe',
            username: 'zepe',
            password: '123'  
        })

        retrieveUser('zepe', function(error, usuario) {
            expect(error).toBe(null)
            expect(usuario).toBeDefined()
            expect(usuario.name).toBe('zepe')
            expect(usuario.username).toBe('zepe')
        })

        users.length = 0
    })


    it('should not found the username', function () {
        users.length = 0  // vacio memoria

        users.push({      // le pongo un usuario
            name: 'zepe',
            username: 'zepe',
            password: '123'  
        })

        retrieveUser('aitor', function(error, usuario) {
            expect(error).toBeDefined()
            expect(error.message).toBe('user with username aitor not found')
        })

        users.length = 0
    })

})
