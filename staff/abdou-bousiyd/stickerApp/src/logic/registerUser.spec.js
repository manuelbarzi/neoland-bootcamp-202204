describe('registerUser', () => {
    it('should succeed on new user (not already existing)', () => {
        users.length = 0
        console.log(users, 888)

        registerUser('Tor Tuga', 'tortuga', '123123123', function(error) {
            expect(error).toBeNull()

            expect(users).toHaveSize(1)

            const user = users[0]

            expect(user).toBeDefined()
            expect(user.name).toBe('Tor Tuga')
            expect(user.username).toBe('tortuga')
            expect(user.password).toBe('123123123')
        })

        users.length = 0
    })

    it('should fail on trying to register an already existing user (same username)', () => {
        users.length = 0

        users.push({
            name: 'Cacá Tua',
            username: 'cacatua',
            password: '123123123'  
        })

        registerUser('Cacá Tua', 'cacatua', '123123123', function(error) {
            expect(error).toBeDefined()

            expect(error.message).toBe('username already exists')
        })

        users.length = 0
    })
})