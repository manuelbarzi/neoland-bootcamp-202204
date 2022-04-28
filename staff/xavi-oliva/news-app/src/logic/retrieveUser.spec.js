describe('retrieveUser', () => {
    it('should succeed on existing user (username)', () => {
        users.length = 0

        users.push({
            name: 'John Doe',
            username: 'johndoe',
            password: '123123123'
        })

        retrieveUser('johndoe', (error, user) => {
            expect(error).toBeNull()

            expect(user).toBeDefined()
            expect(user.name).toBe('John Doe')
            expect(user.username).toBe('johndoe')
            expect(user.password).toBeUndefined()
        })
    })
})