describe('registerUser', () => {
    it('should succeed on new user (not already existing)', () => {
        db.users.length = 0

        registerUser('Tor Tuga', 'tortuga', '123123123', function(error) {
            expect(error).toBeNull()

            expect(db.users).toHaveSize(1)

            const user = db.users[0]

            expect(user).toBeDefined()
            expect(user).toBeInstanceOf(User)
            expect(user.name).toBe('Tor Tuga')
            expect(user.username).toBe('tortuga')
            expect(user.password).toBe('123123123')
        })

        db.users.length = 0
    })

    it('should fail on trying to register an already existing user (same username)', () => {
        db.users.length = 0

        db.users.push(new User('Cacá Tua', 'cacatua', '123123123'))

        registerUser('Cacá Tua', 'cacatua', '123123123', function(error) {
            expect(error).toBeDefined()

            expect(error.message).toBe('username already exists')
        })

        db.users.length = 0
    })
})