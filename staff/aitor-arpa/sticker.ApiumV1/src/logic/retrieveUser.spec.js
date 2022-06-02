describe('retrieveUser', () => {
    it('should succeed on existing user (username)', () => {
        db.users.length = 0

        db.users.push({
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
