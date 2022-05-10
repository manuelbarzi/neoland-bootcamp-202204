describe('updateUserName', () => {
    it('succeeds when user exists', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserName('chocolater', 'Choco crispi', error => {
            expect(error).toBeNull()

            const user = db.users.find(user => user.username === 'chocolater')

            expect(user.name).toBe('Choco crispi')
        })

        db.users.length = 0
    })

    it('fails when user dont exists', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserName('chocolater' + '-wrong', 'Choco crispi', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('user with username "chocolater-wrong" does not exist')
        })

        db.users.length = 0
    })
})
