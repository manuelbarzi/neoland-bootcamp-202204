describe('retrieveUser', function () {
    it('should return the name of the user', function() {
        db.users.length = 0  // vacio memoria

        db.users.push({      // le pongo un usuario
            name: 'John Smith',
            username: 'johnsmith',
            password: '123123123'  
        })

        retrieveUser('johnsmith', (error, user) => {
            expect(error).toBeNull()
            
            expect(user).toBeDefined()
            expect(user.name).toBe('John Smith')
            expect(user.username).toBe('johnsmith')
            expect(user.password).toBeUndefined()
        })
    })
})