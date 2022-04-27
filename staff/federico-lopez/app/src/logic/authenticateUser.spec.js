describe('authenticateUser', () => {
    it('should succeed on user already registered in data', () => {
        users.length = 0

        users.push({name: 'Carlos', username: 'carlitos', password: '123123123'})

        authenticateUser('carlitos', '123123123', function(error) {
            expect(error).toBeNull()
        })
        users.length = 0
    })

    it('should fail on trying with a not registered username', () => {
        users.length = 0

        users.push({name: 'Carlos', username: 'carlitos', password: '123123123'})

        authenticateUser('carlitoss', '123123123', function(error) {
            expect(error).toBeDefined()
            expect(error.message).toBe('wrong credentials')
        })
    })
})