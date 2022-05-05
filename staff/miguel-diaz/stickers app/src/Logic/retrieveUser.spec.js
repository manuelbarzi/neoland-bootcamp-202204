describe('retrieveUser', () => {
    it('should succeed on existing  user ( username)', () => {
        db.users.length = 0

        db.users.push({
            name: 'Miguel Angel',
            username: 'miguel',
            password: 'miguel123'
        })

        retrieveUser('miguel', (error, user) => {
            expect(error).toBeNull()

            expect(user).toBeDefined()
            expect(user.name).toBe('Miguel Angel')
            expect(user.username).toBe('miguel')
            expect(user.password).toBeUndefined()
        })
    })
})

