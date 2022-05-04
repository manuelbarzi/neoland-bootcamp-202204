describe('authenticateUser', () => {
    it('should be match', function() {
        db.users.length = 0

        db.users.push ({
            name: 'Miguel Diaz',
            username: 'miguel',
            password: 'miguel123'
        })

        authenticateUser('miguel', 'miguel123', function(error) {

            expect(error).toBeNull()
        })
        db.users.length = 0
        
    })

    it('should fail on existing user with incorrect password', () => {
        db.users.length = 0

        db.users.push({
            name: 'Miguel Angel',
            username: 'miguel',
            password: 'miguel123'
        })

        authenticateUser('miguel', 'wrong-miguel123', error => {
            expect(error).toBeDefined()
            expect(error.message).toBe('wrong credentials')
        })

        db.users.length = 0
    })

    it('should fail on existing user with incorrect username', () => {
        db.users.length = 0

        db.users.push({
            name: 'Miguel Angel',
            username: 'miguel',
            password: 'miguel123'
        })

        authenticateUser('wrong-miguel', 'miguel123', error => {
            expect(error).toBeDefined()
            expect(error.message).toBe('wrong credentials')
        })

        db.users.length = 0
    })

    it('should fail on non-existing user', () => {
        db.users.length = 0

        authenticateUser('miguel', 'miguel123', error => {
            expect(error).toBeDefined()
            expect(error.message).toBe('wrong credentials')
        })

        db.users.length = 0
    })
})
