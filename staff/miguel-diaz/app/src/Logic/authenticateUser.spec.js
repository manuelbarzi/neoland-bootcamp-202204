describe('authenticateUser', () => {
    it('should be match', function() {
        users.length = 0

        const user = {
            name: 'Miguel Diaz',
            username: 'miguel',
            password: 'miguel123'
        }

        authenticateUser('miguel', 'miguel123', function(error) {

            expect(error).toBeNull()
        })
        users.length = 0
        
    })

    it('should fail when we enter the username', () => {
        users.length = 0

        users.push ('Juan', 'mgiuel321', function(error) {
            expect(error).toBeDefined()
            expect(error.message).toBe('wrong credentials')
        })
    })
})