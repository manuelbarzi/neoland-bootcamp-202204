describe('updateUserPassword', () => {
    it('succeeds when user exists', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'manu', 'manu'))

        updateUserPassword('chocolater', 'manu', 'manu', error => {
            expect(error).toBeNull()

            const user = db.users.find(user => user.username === 'chocolater')

            expect(user.username).toBe('manu')
        })

        db.users.length = 0
    })
})