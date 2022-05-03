describe('updateUserName', () => {
    it('succeeds when user exists and name is correct', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserUserName('chocolater', 'Choco Later', 'Dieguinho DoBrasil', error => {
            expect(error).toBeNull()

            const user = db.users.find(user => user.username === 'chocolater')

            expect(user.name).toBe('Dieguinho DoBrasil')
        })

        db.users.length = 0
    })

    it('fails when user exists and password is incorrect', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserUserName('chocolater', '123123123' + '-wrong', '234234234', '234234234', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('wrong password')
        })

        db.users.length = 0
    })

    it('fails when current name and new name are the same', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserUserName('chocolater', 'Choco Later', 'Choco Later', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('curren name and new name are the same')
        })

        db.users.length = 0
    })

})