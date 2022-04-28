describe('RegistreUser', function() {
    it('should match with the new username', () => {
        users.length = 0

        registerUser('Elon Musk', 'Tesla', '1970', function(error){
            expect(error).toBeNull()

            expect(users).toHaveSize(1)

            const user = users[0]

            expect(user).toBeDefined()
            expect(user.name).toBe('Elon Musk')
            expect(user.username).toBe('Tesla')
            expect(user.password).toBe('1970')
            
        })
        users.length = 0
    })

    it('should fail on trying to register an already existing user (same username)', () => {
        users.length = 0

        users.push({
            name: 'Bill Gates',
            username: 'bill',
            password: '666'
        })

        registerUser('Bill Gates', 'bill', '666', function(error) {
            expect(error).toBeDefined()

            expect(error.message).toBe('username already exists')
        })

        users.length = 0
    })

})